# Contributing to Varnish2

## Requirements

The only thing you need to install before getting started is [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

## Getting Started

To get your development environment setup, follow these instructions:

1. Clone the repository:

   ```bash
   git clone git@github.com:allenai/varnish-mui.git
   ```

2. Build and start an instance of the demo:

   ```sh
   yarn && yarn docs:dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000/material-ui/varnish) and use the demo to verify the changes you're making.

## Making a code change

### Library

Varnish 2 library files are found under `packages/varnish` and `packages/eslint-config-varnish`.

### Demo/Documentation

All varnish2 components should have one or more demos in the documentation.
Varnish2 documentation files are found under `docs/data/material/varnish` and `docs/pages/material-ui/varnish`.

**Note:** .tsx demos will need to provide .js equivalents to reference in the .md demo pages; if you are developing in TypeScript, you will need to run this script to produce the corresponding .js files:

```sh
yarn docs:typescript:formatted
```

Doing so will also produce a .tsx.preview file.

For an example, look at the demo components referenced in the [Colors Markdown File](docs/data/material/varnish/colors/colors.md).

### Coding Style

Please follow the coding style of the project. MUI uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `yarn prettier` reformats the code.
- `yarn lint` runs the linting rules manually.

### Making a pull request

1. From the root of the project, prepare by running:

   ```sh
   yarn
   yarn prettier
   yarn docs:typescript:formatted
   yarn lint --fix
   yarn start
   ```

1. Test the demo at localhost:3000

1. If your changes look good, make a pull-request against main.

## Publishing packages to NPM

**Note: We do not use `lerna publish`. Lerna is configured by the MUI team to release packages we do not want to release.**

1. Make sure you have [NodeJS](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) installed.

1. Login to `npm`:

   ```bash
   npm login
   ```

   If you haven't been added to the `@allenai` NPM organization you'll
   get a permissions error when you attempt the `publish` command below. If
   this occurs ask someone from [REVIZ](mailto:reviz@allenai.org) to add you.

1. Review the changes since the last release manually and make sure you're comfortable releasing.

1. Make sure you're on the `main` branch without any pending changes.

1. To release **varnish2**:

   ```sh
   cd packages/varnish
   npm version major|minor|patch
   git push --tags origin main
   yarn release # yarn build && cd build && npm publish && cd ..
   ```

1. To release **eslint-config-varnish**:

   ```sh
   cd packages/eslint-config-varnish
   npm version major|minor|patch
   git push --tags origin main
   yarn release # npm publish
   ```

1. Update the [Skiff Template](https://github.com/allenai/skiff-template) to use the latest packages.
