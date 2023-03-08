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

type Mode = 'light' | 'dark';

export const getVarnishDesignTokens = (mode: Mode): ThemeOptions => {
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
        light: mode === 'light' ? color2.B2.hex : color2.B1.hex,
        main: mode === 'light' ? color2.B3.hex : color2.B2.hex,
        dark: mode === 'light' ? color2.B4.hex : color2.B3.hex,
        contrastText: color2.white.hex,
      },
      secondary: {
        light: mode === 'light' ? color2.P2.hex : color2.P1.hex,
        main: mode === 'light' ? color2.P3.hex : color2.P2.hex,
        dark: mode === 'light' ? color2.P4.hex : color2.P3.hex,
        contrastText: color2.white.hex,
      },
      error: {
        light: mode === 'light' ? color2.R2.hex : color2.R1.hex,
        main: mode === 'light' ? color2.R4.hex : color2.R3.hex,
        dark: mode === 'light' ? color2.R5.hex : color2.R4.hex,
        contrastText: color2.white.hex,
      },
      warning: {
        light: mode === 'light' ? color2.F2.hex : color2.F1.hex,
        main: mode === 'light' ? color2.F4.hex : color2.F3.hex,
        dark: mode === 'light' ? color2.F5.hex : color2.F4.hex,
        contrastText: color2.white.hex,
      },
      info: {
        light: mode === 'light' ? color2.B2.hex : color2.B1.hex,
        main: mode === 'light' ? color2.B3.hex : color2.B2.hex,
        dark: mode === 'light' ? color2.B4.hex : color2.B3.hex,
        contrastText: color2.white.hex,
      },
      success: {
        light: mode === 'light' ? color2.G3.hex : color2.G2.hex,
        main: mode === 'light' ? color2.G4.hex : color2.G3.hex,
        dark: mode === 'light' ? color2.G5.hex : color2.G4.hex,
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

export const getTheme = (mode: Mode = 'light', overrides: any = {}) => {
  const mergedTheme = deepmerge(getVarnishDesignTokens(mode), overrides);
  return createTheme(mergedTheme);
};

export default { getVarnishDesignTokens, getTheme };
