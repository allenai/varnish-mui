/**
 * This is a template that's compiled down to a definition of the
 * infrastructural resources required for running your application.
 *
 * For more information on the JSONNET language, see:
 * https://jsonnet.org/learning/getting_started.html
 */

// This file is generated once at template creation time and unlikely to change
// from that point forward.
local config = import '../skiff.json';
local util = import './util.libsonnet';

function(image, cause, sha, env='prod', branch='', repo='', buildId='')
    // A list of hostnames served by your application. By default your application's
    // `prod` environment will receive requests made to `$appName.apps.allenai.org` and
    // non-production environments will receive requests made to `$appName-$env.apps.allenai.org`.
    //
    // If you'd like to use a custom domain make sure DNS is pointed to the cluster's IP
    // address and add the domain to the `customDomains` list in `../skiff.json`.
    local hosts = util.getHosts(env, config);

    // In production you run should run two or more replicas of your
    // application, so that if one instance goes down or is busy (e.g., during
    // a deployment), users can still use the remaining replicas of your
    // application.
    //
    // However, if you use GPUs, which are expensive, consider setting the prod
    // replica count to 1 as a trade-off between availability and costs.
    //
    // In all other environments (e.g., adhocs) we run a single instance to
    // save money.
    local numReplicas = if env == 'prod' then config.replicas.prod else 1;

    // Each app gets it's own namespace.
    local namespaceName = config.appName;

    // Since we deploy resources for different environments in the same namespace,
    // we need to give things a fully qualified name that includes the environment
    // as to avoid unintentional collission / redefinition.
    local fullyQualifiedName = config.appName + '-' + env;

    // Every resource is tagged with the same set of labels. These labels serve the
    // following purposes:
    //  - They make it easier to query the resources, i.e.
    //      kubectl get pod -l app=my-app,env=staging
    //  - The service definition uses them to find the pods it directs traffic to.
    local namespaceLabels = {
        app: config.appName,
        contact: config.contact,
        team: config.team
    };

    local labels = namespaceLabels + {
        env: env
    };

    local selectorLabels = {
        app: config.appName,
        env: env
    };

    // By default multiple instances of your application could get scheduled
    // to the same node. This means if that node goes down your application
    // does too. We use the label below to avoid that.
    local antiAffinityLabels = {
        onlyOneOfPerNode: config.appName + '-' + env
    };
    local podLabels = labels + antiAffinityLabels;

    // Annotations carry additional information about your deployment that
    // we use for auditing, debugging and administrative purposes
    local annotations = {
        "apps.allenai.org/sha": sha,
        "apps.allenai.org/branch": branch,
        "apps.allenai.org/repo": repo,
        "apps.allenai.org/build": buildId
    };

    // Running on a GPU requires a special limit on the container, and a
    // specific nodeSelector.
    local gpuInConfig = std.count(std.objectFields(config), "gpu") > 0;

    // determine number of gpus
    local gpuLimits = if gpuInConfig then
        if config.gpu == "k80x2" then
            { 'nvidia.com/gpu': 2 }
        else if config.gpu == "t4x4" then
            { 'nvidia.com/gpu': 4 }
        else
            { 'nvidia.com/gpu': 1 }
    else {};

    local nodeSelector = if gpuInConfig then
        if config.gpu == "k80" || config.gpu == "k80x2" then
            { 'cloud.google.com/gke-accelerator': 'nvidia-tesla-k80' }
        else if config.gpu == "p100" then
            { 'cloud.google.com/gke-accelerator': 'nvidia-tesla-p100' }
        else if config.gpu == "t4x4" then
            { 'cloud.google.com/gke-accelerator': 'nvidia-tesla-t4' }
        else
            error "invalid GPU specification; expected 'k80', 'k80x2', 'p100' or 't4x4', but got: " + config.gpu
    else
         { };

    local port = 3000;

    local namespace = {
        apiVersion: 'v1',
        kind: 'Namespace',
        metadata: {
            name: namespaceName,
            labels: namespaceLabels
        }
    };

    local tls = util.getTLSConfig(fullyQualifiedName, hosts);
    local ingress = {
        apiVersion: 'networking.k8s.io/v1',
        kind: 'Ingress',
        metadata: {
            name: fullyQualifiedName,
            namespace: namespaceName,
            labels: labels,
            annotations: annotations + tls.ingressAnnotations + {
                'kubernetes.io/ingress.class': 'nginx',
                'nginx.ingress.kubernetes.io/ssl-redirect': 'true'
            }
        },
        spec: {
            tls: [ tls.spec + { hosts: hosts } ],
            rules: [
                {
                    host: host,
                    http: {
                        paths: [
                            {
                                pathType: 'ImplementationSpecific',
                                backend: {
                                    service: {
                                        name: fullyQualifiedName,
                                        port: {
                                            number: port
                                        }
                                    }
                                }
                            }
                        ]
                    }
                } for host in hosts
            ]
        }
    };

    local deployment = {
        apiVersion: 'apps/v1',
        kind: 'Deployment',
        metadata: {
            labels: labels,
            name: fullyQualifiedName,
            namespace: namespaceName,
            annotations: annotations + {
                'kubernetes.io/change-cause': cause
            }
        },
        spec: {
            strategy: {
                type: 'RollingUpdate',
                rollingUpdate: {
                    maxSurge: numReplicas // This makes deployments faster.
                }
            },
            revisionHistoryLimit: 3,
            replicas: numReplicas,
            selector: {
                matchLabels: selectorLabels
            },
            template: {
                metadata: {
                    name: fullyQualifiedName,
                    namespace: namespaceName,
                    labels: podLabels,
                    annotations: annotations
                },
                spec: {
                    # This block tells the cluster that we'd like to make sure
                    # each instance of your application is on a different node. This
                    # way if a node goes down, your application doesn't:
                    # See: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-isolation-restriction
                    affinity: {
                        podAntiAffinity: {
                            requiredDuringSchedulingIgnoredDuringExecution: [
                                {
                                   labelSelector: {
                                        matchExpressions: [
                                            {
                                                    key: labelName,
                                                    operator: "In",
                                                    values: [ antiAffinityLabels[labelName], ],
                                            } for labelName in std.objectFields(antiAffinityLabels)
                                       ],
                                    },
                                    topologyKey: "kubernetes.io/hostname"
                                },
                            ]
                        },
                    },
                    nodeSelector: nodeSelector,
                    containers: [
                        {
                            name: fullyQualifiedName,
                            image: image,
                            readinessProbe: {
                                httpGet: {
                                    path: '/?check=rdy'
                                }
                            },
                            resources: {
                                requests: {
                                   cpu: 0.1,
                                   memory: '100M'
                                }
                            }
                        }
                    ]
                }
            }
        }
    };

    local service = {
        apiVersion: 'v1',
        kind: 'Service',
        metadata: {
            name: fullyQualifiedName,
            namespace: namespaceName,
            labels: labels,
            annotations: annotations
        },
        spec: {
            selector: selectorLabels,
            ports: [
                {
                    port: port
                }
            ]
        }
    };

    local pdb = {
        apiVersion: 'policy/v1beta1',
        kind: 'PodDisruptionBudget',
        metadata: {
            name: fullyQualifiedName,
            namespace: namespaceName,
            labels: labels,
        },
        spec: {
            minAvailable: if numReplicas > 1 then 1 else 0,
            selector: {
                matchLabels: selectorLabels,
            },
        },
    };

    [
        namespace,
        ingress,
        deployment,
        service,
        pdb
    ]
