import fs from 'fs-extra';
import path from 'path';
import { createCssVarsTheme } from '@mui/system/cssVars';
import { getTheme } from '@allenai/varnish2/theme';

const indent = `    `;
const newLine = '\n';
const colorSchemes = {};
const theme = getTheme();

const all = createCssVarsTheme({ ...theme, colorSchemes }).generateCssVars().css;
const formatted = Object.entries(all)
  // remove broken mixins
  .filter(([k,]) => !k.startsWith('--mixins-'))
  // remove color rgb values
  .filter(([k,]) => !k.match('--.+-.+-rgba-.'))
  // remove color names
  .filter(([k,]) => !k.match('--.+-.+-displayName'))
  // remove breakpoint keys
  .filter(([k,]) => !k.match('--breakpoints-keys-.+') && k !== '--breakpoints-unit')
  // rename color to remove hex
  .map(([k, v]) => {
    let newK = k;
    if (k.match(`--.+-.+-hex`)) {
      newK = k.replace('-hex', '');
    }
    if (k.match(`--breakpoints-values-.+`)) {
      newK = k.replace('-values', '');
    }
    return `${indent}${newK}: ${v};`;
  });

const getSpacing = (num: number) => {
  return `${indent}--spacing-${num}: ${theme.spacing(num)};`;
};

const getSpacings = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16].map((i) => getSpacing(Number(i)));
};

const ret = [
  `/**
 * Auto generated style file for shellac.
 */`,
  '',
  '@import "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Volkhov:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap";',
  '',
  ':root {',
  ...formatted,
  `${indent}--spacing-0: ${theme.spacing(0.5)};`,
  ...getSpacings(),
  `${indent}--spacing-xxs: ${theme.spacing(0.5)};`,
  `${indent}--spacing-xs2: ${theme.spacing(0.5)};`,
  `${indent}--spacing-xs: ${theme.spacing(1)};`,
  `${indent}--spacing-sm: ${theme.spacing(1)};`,
  `${indent}--spacing-md: ${theme.spacing(2)};`,
  `${indent}--spacing-lg: ${theme.spacing(3)};`,
  `${indent}--spacing-xl: ${theme.spacing(4)};`,
  `${indent}--spacing-xl2: ${theme.spacing(6)};`,
  `${indent}--spacing-xl3: ${theme.spacing(8)};`,
  `${indent}--spacing-xl4: ${theme.spacing(12)};`,
  `${indent}--spacing-xl5: ${theme.spacing(16)};`,
  '}',
  '',
  `html, body {
    margin: 0;
    padding: 0;
}

* {
    box-sizing: border-box;
}

html {
    font-size: 100%;
}

body {
    font-family: var(--typography-body1-fontFamily);
    font-size: var(--typography-body1-fontSize);
    line-height: var(--typography-body1-lineHeight);
    color: var(--palette-text-primary);
    font-weight: var(--typography-body1-fontWeight);
    letter-spacing: var(--typography-body1-letterSpacing)
    /**
     * These settings are non-standard, but important to ensure things
     * look as expected.
     */;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smoothing: antialiased;
}

h1 {
    color: var(--typography-h1-color);
    font-family: var(--typography-h1-fontFamily);
    font-weight: var(--typography-h1-fontWeight);
    font-size: var(--typography-h1-fontSize);
    line-height: var(--typography-h1-lineHeight);
    letter-spacing: var(--typography-h1-letterSpacing);
    margin: var(--typography-h1-margin);
}

h2 {
    color: var(--typography-h2-color);
    font-family: var(--typography-h2-fontFamily);
    font-weight: var(--typography-h2-fontWeight);
    font-size: var(--typography-h2-fontSize);
    line-height: var(--typography-h2-lineHeight);
    letter-spacing: var(--typography-h2-letterSpacing);
    margin: var(--typography-h2-margin);
}

h3 {
    color: var(--typography-h3-color);
    font-family: var(--typography-h3-fontFamily);
    font-weight: var(--typography-h3-fontWeight);
    font-size: var(--typography-h3-fontSize);
    line-height: var(--typography-h3-lineHeight);
    letter-spacing: var(--typography-h3-letterSpacing);
    margin: var(--typography-h3-margin);
}

h4 {
    color: var(--typography-h4-color);
    font-family: var(--typography-h4-fontFamily);
    font-weight: var(--typography-h4-fontWeight);
    font-size: var(--typography-h4-fontSize);
    line-height: var(--typography-h4-lineHeight);
    letter-spacing: var(--typography-h4-letterSpacing);
    margin: var(--typography-h4-margin);
}

h5 {
    color: var(--typography-h5-color);
    font-family: var(--typography-h5-fontFamily);
    font-weight: var(--typography-h5-fontWeight);
    font-size: var(--typography-h5-fontSize);
    line-height: var(--typography-h5-lineHeight);
    letter-spacing: var(--typography-h5-letterSpacing);
    margin: var(--typography-h5-margin);
}

h6, legend {
    color: var(--typography-h6-color);
    font-family: var(--typography-h6-fontFamily);
    font-weight: var(--typography-h6-fontWeight);
    font-size: var(--typography-h6-fontSize);
    line-height: var(--typography-h6-lineHeight);
    letter-spacing: var(--typography-h6-letterSpacing);
    margin: var(--typography-h6-margin);
}

.subtitle1 {
    font-family: var(--typography-subtitle1-fontFamily);
    font-weight: var(--typography-subtitle1-fontWeight);
    font-size: var(--typography-subtitle1-fontSize);
    line-height: var(--typography-subtitle1-lineHeight);
    letter-spacing: var(--typography-subtitle1-letterSpacing);
}

.subtitle2 {
    font-family: var(--typography-subtitle2-fontFamily);
    font-weight: var(--typography-subtitle2-fontWeight);
    font-size: var(--typography-subtitle2-fontSize);
    line-height: var(--typography-subtitle2-lineHeight);
    letter-spacing: var(--typography-subtitle2-letterSpacing);
}

.body1 {
    font-family: var(--typography-body1-fontFamily);
    font-weight: var(--typography-body1-fontWeight);
    font-size: var(--typography-body1-fontSize);
    line-height: var(--typography-body1-lineHeight);
    letter-spacing: var(--typography-body1-letterSpacing);
}

.body2 {
    font-family: var(--typography-body2-fontFamily);
    font-weight: var(--typography-body2-fontWeight);
    font-size: var(--typography-body2-fontSize);
    line-height: var(--typography-body2-lineHeight);
    letter-spacing: var(--typography-body2-letterSpacing);
}

.button {
    font-family: var(--typography-button-fontFamily);
    font-weight: var(--typography-button-fontWeight);
    font-size: var(--typography-button-fontSize);
    line-height: var(--typography-button-lineHeight);
    letter-spacing: var(--typography-button-letterSpacing);
    text-transform: var(--typography-button-textTransform);
}

.caption {
    color: var(--typography-caption-color);
    font-family: var(--typography-caption-fontFamily);
    font-weight: var(--typography-caption-fontWeight);
    font-size: var(--typography-caption-fontSize);
    line-height: var(--typography-caption-lineHeight);
    letter-spacing: var(--typography-caption-letterSpacing);
}

.overline {
    font-family: var(--typography-overline-fontFamily);
    font-weight: var(--typography-overline-fontWeight);
    font-size: var(--typography-overline-fontSize);
    line-height: var(--typography-overline-lineHeight);
    letter-spacing: var(--typography-overline-letterSpacing);
    text-transform: var(--typography-overline-textTransform);
}
`,
].join(newLine);

const fileName = 'shellac.css';
const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const targetPath = path.resolve(buildPath, `./${fileName}`);

fs.writeFileSync(targetPath, ret, 'utf8');
