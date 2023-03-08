import { ThemeOptions, createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { color, Color, color2, darkCategoricalColor, lightCategoricalColor } from './colors';
import { Dictionary } from '../utils/base';

interface VarnishMuiTheme {
  color: Dictionary<Color>;
  color2: Dictionary<Color>;
  darkCategoricalColor: Dictionary<Color>;
  lightCategoricalColor: Dictionary<Color>;
}

interface VarnishMuiThemeOptions {
  color?: Dictionary<Color>;
  color2?: Dictionary<Color>;
  darkCategoricalColor?: Dictionary<Color>;
  lightCategoricalColor?: Dictionary<Color>;
}

declare module '@mui/material/styles' {
  interface Theme extends VarnishMuiTheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends VarnishMuiThemeOptions {}
}

export const getVarnishDesignTokens = (): ThemeOptions => {
  return {
    typography: {
      fontFamily: [
        '"Lato"',
        '"Lucida Grande"',
        '"Tahoma"',
        '"Helvetica Neue"',
        '"Helvetica"',
        '"-apple-system"',
        '"BlinkMacSystemFont"',
        '"Segoe UI"',
        '"PingFang SC"',
        '"Hiragino Sans GB"',
        '"Microsoft YaHei"',
        '"Arial"',
        '"sans-serif"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        light: color2.B2.hex,
        main: color2.B3.hex,
        dark: color2.B4.hex,
        contrastText: color2.white.hex,
      },
      secondary: {
        light: color2.P2.hex,
        main: color2.P3.hex,
        dark: color2.P4.hex,
        contrastText: color2.white.hex,
      },
      error: {
        light: color2.R2.hex,
        main: color2.R4.hex,
        dark: color2.R5.hex,
        contrastText: color2.white.hex,
      },
      warning: {
        light: color2.F2.hex,
        main: color2.F4.hex,
        dark: color2.F5.hex,
        contrastText: color2.white.hex,
      },
      info: {
        light: color2.B2.hex,
        main: color2.B3.hex,
        dark: color2.B4.hex,
        contrastText: color2.white.hex,
      },
      success: {
        light: color2.G3.hex,
        main: color2.G4.hex,
        dark: color2.G5.hex,
        contrastText: color2.white.hex,
      },
      grey: {
        50: color2.N1.hex,
        100: color2.N1.hex,
        200: color2.N2.hex,
        300: color2.N2.hex,
        400: color2.N3.hex,
        500: color2.N3.hex,
        600: color2.N4.hex,
        700: color2.N4.hex,
        800: color2.N5.hex,
        900: color2.N5.hex,
        A100: color2.N1.hex,
        A200: color2.N2.hex,
        A400: color2.N3.hex,
        A700: color2.N4.hex,
      },
    },
    color,
    color2,
    darkCategoricalColor,
    lightCategoricalColor,
  };
};

export const getTheme = (overrides: any = {}) => {
  const mergedTheme = deepmerge(getVarnishDesignTokens(), overrides);
  return createTheme(mergedTheme);
};

export default { getVarnishDesignTokens, getTheme };
