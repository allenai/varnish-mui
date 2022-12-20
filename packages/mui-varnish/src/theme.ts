import type {} from '@mui/material/themeCssVarsAugmentation';
import { ThemeOptions } from '@mui/material/styles';
import { color, Color } from './colors';
import { Dictionary } from './util';

declare module '@mui/material/styles' {
  interface Theme {
    color: Dictionary<Color>;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: Dictionary<Color>;
  }
}

const getVarnishDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => {
  return {
    palette: {
      primary: {
        light: mode === 'light' ? color.B3.hex : color.B2.hex,
        main: mode === 'light' ? color.B6.hex : color.B3.hex,
        dark: mode === 'light' ? color.B8.hex : color.B5.hex,
      },
      secondary: {
        light: mode === 'light' ? color.O4.hex : color.O2.hex,
        main: mode === 'light' ? color.O7.hex : color.O4.hex,
        dark: mode === 'light' ? color.O9.hex : color.O6.hex,
      },
    },
    color,
  } as ThemeOptions;
};

export default { getVarnishDesignTokens };
