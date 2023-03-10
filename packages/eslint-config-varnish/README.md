# ESLint Config

The files in this directory represent the `eslint` configuration settings
for Varnish. They also have the `eslint` rules for MUI folded in.

They will be published as a separate NPM module,
`@allenai/varnish-eslint-config`. This allows them to be shared easily
across multiple AI2 projects.

For more information about publishing and using shared `eslint` configuration
definitions, see [this documentation](https://eslint.org/docs/user-guide/configuring).

## Usage

1. Install it and it's peer dependencies:

   ```shell
   ~ yarn add @allenai/eslint-config-varnish \
       @typescript-eslint/eslint-plugin \
       @typescript-eslint/parser \
       eslint \
       eslint-config-prettier \
       eslint-config-standard \
       eslint-plugin-import \
       eslint-plugin-jsx-a11y \
       eslint-plugin-mdx \
       eslint-plugin-node \
       eslint-plugin-prettier \
       eslint-plugin-promise \
       eslint-plugin-react \
       eslint-plugin-standard \
       prettier
   ```

2. Create a file with patterns specifying stuff you'd like to ignore:

   ```bash
   ~ cat <<EOF > .eslintignore
   .next/
   node_modules/
   package.json
   tsconfig.json
   EOF
   ```

3. Create a config file, and configure `eslint` to use this package as a base:

   ```bash
   cat <<EOF > .eslintrc.js
   module.exports = {
       extends: [ "@allenai/varnish-eslint-config" ]
   };
   EOF
   ```

4. Add targets for linting and reformatting code to your `package.json` file:

   ```json
   "scripts": {
       "lint": "eslint '**/*.{js,ts,tsx,json}' && echo '💫  Lint complete.'",
       "lint:fix": "eslint '**/*.{js,ts,tsx,json}' --fix && echo '🛠  Lint --fix complete.'",
   }
   ```

5. Try it out:

   ```bash
   # See what's wrong
   ~ yarn lint

   # Reformat and fix things
   ~ yarn lint:fix
   ```

## Publishing

See instructions at the monorepo root [README](../../README.md)

🤘 ⛵️ 🎨