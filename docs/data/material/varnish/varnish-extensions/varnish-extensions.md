---
title: varnish-eslint-config
githubLabel: 'varnish: varnish-extensions'
---

# Extensions

<p class="description">AI2 Varnish Extensions</p>

This is documentation for various extension packages that Varnish provides.

## Packages

### Varnish ESLint

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

For more information about Varnish ESLint and further customization options, visit the documentation.