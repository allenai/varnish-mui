# STOP

⚠️ Deprecated Repo, use: https://github.com/allenai/varnish instead!! ⚠️





# Varnish2 Monorepo

This repository contains code for a collection of libraries and applications that, in concert,
help AI2 build web interfaces. This new version of Varnish is built on a forked version of [Material UI](https://github.com/mui/material-ui).

## Repository Structure

All Varnish2 code can be found under `packages/varnish` and `packages/eslint-config-varnish`. The corresponding demos for these Varnish2 components can be found under `docs/data/material/varnish` and `docs/pages/material-ui/varnish`. When you add a new component, create a demo page for the component in the docs to test locally.

**Tip:** To see most relevant source files, filter your searches to: `**/varnish/src/**/*.*, **/eslint-config-varnish/src/**/*.*, **/material/varnish/**/*.*, **/material-ui/varnish/**/*.*`

## Packages

- @allenai/varnish
- @allenai/eslint-config-varnish

## Development

To start the Varnish2 docs site in development mode, from the project root, run:

```sh
yarn && yarn docs:dev
```

If you do not have yarn installed, select your OS and follow the instructions on the [Yarn website](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

_DO NOT USE NPM, use Yarn to install the dependencies._

## Contributing

See [Contributing](./CONTRIBUTING.md)
