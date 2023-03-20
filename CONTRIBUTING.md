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
   yarn lint:fix
   yarn start
   ```

1. Test the demo at localhost:3000

1. If your changes look good, make a pull-request against main.

## Versioning

Varnish2 follows [Semantic Versioning 2.0.0](https://semver.org/).
Varnish2 version numbers have three parts: `major.minor.patch`.
The version number is incremented based on the level of change included in the release.

- **Major releases** contain significant new features, some developer assistance is expected during the update.
  When updating to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs.
- **Minor releases** contain important new features.
  Minor releases are fully backward-compatible; no developer assistance is expected during the update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release.
- **Patch releases** are low risk, contain bug fixes and small new features.
  No developer assistance is expected during the update.

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
   npm version patch # major|minor|patch follow semver
   git add package.json
   git commit -m "version update for release to npm"
   git push --tags origin main
   yarn build
   cd build && npm publish && cd .. # deploy from the packages/varnish/build directory
   ```

1. To release **eslint-config-varnish**:

   ```sh
   cd packages/eslint-config-varnish
   npm version patch # major|minor|patch follow semver
   git add package.json
   git commit -m "version update for release to npm"
   git push --tags origin main
   npm publish
   ```

1. Update the [Skiff Template](https://github.com/allenai/skiff-template) to use the latest packages.

## Merging changes from the parent repo

This repo is a fork of `git@github.com:mui/material-ui.git`
Monthly, we should merge changes from the original evolving codebase into our repo.

### Background

We have 2 remotes:

```
$ remote -v

origin    git@github.com:allenai/varnish-mui.git (fetch)
origin    git@github.com:allenai/varnish-mui.git (push)
upstream  git@github.com:mui/material-ui.git (fetch)
upstream  git@github.com:mui/material-ui.git (push)
```

### Merge Process

Fetch all the branches of that remote into remote-tracking branches

```sh
git fetch upstream
```

Make a local upgrade branch branch. You don't have to name it upgrade :-P

```sh
git checkout -b upgrade
```

Merge upstream changes into local branch

```sh
git merge upstream/master
```

Fix any merge conflicts and test new code. (There are usually hundreds of conflicts, but most are easy to resolve. If you see thousands, hold up and get help)

**Note**: `.preview` files and `.js` files with a corresponding `.ts*` file, should be ignored, review the `.ts*` file and the other files will be overridden via build process.
After running `yarn prettier`, `yarn docs:typescript:formatted`, and `yarn lint:fix`, you should bulk `resolve using mine` the `.preview` and `.js` files with a corresponding `.ts*` file.

For other files:
`DU` Any files we deleted (and they updated) can likely remain deleted.
`UD` Any file they deleted (and we updated) can likely be deleted.
`AA` Review
`UU` Review
`UA` Review
`AU` Review
`yarn.lock` after fixing conflicts, and rerunning yarn `resolve using mine`

Most files that are not in the varnish sections are going to conflict on formatting, just `resolve using theirs` then formatting durring build will remix any issues.
However, there are some changes outside of varnish sections having to do with altering the header or not showing ads, etc... In those cases, try to reason out if the change is fine.

Once merges are complete, lint the code.

```sh
yarn
yarn prettier
yarn docs:typescript:formatted
yarn lint:fix
```

Then make a pull request from upgrade -> origin/main

```sh
git push --set-upstream origin upgrade
```
