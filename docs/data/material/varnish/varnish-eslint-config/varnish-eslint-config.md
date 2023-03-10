---
title: varnish-eslint-config
githubLabel: 'varnish: varnish-eslint-config'
---

# Varnish ESLint Config

<p class="description">AI2 Varnish ESLint Config</p>

This is documentation for the ESLint extension packages that Varnish provides.

## Setup and Usage

Varnish proves `eslint` configurations that you can utilize with a few simple setup steps. For the quickest setup, do the following:

1. Install Varnish ESLint:

   ```
   ~ yarn add @allenai/varnish-eslint-config 
   ```

2. Add targets for linting and reformatting code to your `package.json` file:

   ```
   "scripts": {
       "lint": "eslint '**/*.{js,ts,tsx,json}' && echo '💫  Lint complete.'",
       "lint:fix": "eslint '**/*.{js,ts,tsx,json}' --fix && echo '🛠  Lint --fix complete.'",
   }
   ```

3. Try it out:

   ```
   # See what's wrong
   ~ yarn lint

   # Reformat and fix things
   ~ yarn lint:fix
   ```

For more information about Varnish ESLint and further customization options, visit the [documentation](https://github.com/allenai/varnish-mui/tree/main/packages/eslint-config-varnish/README.md).