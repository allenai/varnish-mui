import { logos } from '@allenai/varnish';

export default function Demo() {
    return (
        <span>
            <div>AllenNLP</div>
            <logos.AllenNLP />
            <br />

            <div>Aristo</div>
            <logos.Aristo />
            <br />

            <div>Mosaic</div>
            <logos.Mosaic />
            <br />

            <div>Prior</div>
            <logos.Prior />
            <br />

            <div>Semantic Scholar</div>
            <logos.SemanticScholar />
            <br />

            <div>Fairness</div>
            <logos.Fairness />
            <br />

            <div>Incubator</div>
            <logos.Incubator />
        </span>
    );
}