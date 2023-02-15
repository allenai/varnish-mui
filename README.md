# Varnish 2.0

This repository contains code for a collection of libraries and applications that, in concert,
help AI2 build web interfaces. This new version of Varnish is built on a forked version of [Material UI](https://github.com/mui/material-ui).

To start the Varnish 2.0 docs site in development mode, from the project root, run:

```sh
yarn && yarn docs:dev
```

If you do not have yarn installed, select your OS and follow the instructions on the [Yarn website](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

_DO NOT USE NPM, use Yarn to install the dependencies._

## Repository Structure

All Varnish components can be found under packages/varnish/src. The corresponding demos for these Varnish components can be found under docs/data/material/varnish. 
When you add a new component, create a demo page for the component in the docs to test locally. 

**Note:** .tsx demos will need to provide .js equivalents to reference in the .md demo pages; if you are developing in TypeScript, you will need to run this script to produce the corresponding .js files:

```sh
yarn docs:typescript:formatted
```

Doing so will also produce a .tsx.preview file. 

For an example, look at the demo components referenced in the [Colors Markdown File](docs/data/material/varnish/colors/colors.md).

## Coding Style

Please follow the coding style of the project. MUI uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `yarn prettier` reformats the code.
- `yarn lint` runs the linting rules manually.


