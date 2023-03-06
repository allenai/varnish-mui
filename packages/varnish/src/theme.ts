import { ThemeOptions, createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { color, Color } from './colors';
import { Dictionary } from './util';

interface VarnishMuiTheme {
  color: Dictionary<Color>;
}

interface VarnishMuiThemeOptions {
  color?: Dictionary<Color>;
}

declare module '@mui/material/styles' {
  interface Theme extends VarnishMuiTheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends VarnishMuiThemeOptions {}
}

type Mode = 'light' | 'dark';

const getVarnishDesignTokens = (mode: Mode): ThemeOptions => {
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
        light: mode === 'light' ? color.B3.hex : color.B2.hex,
        main: mode === 'light' ? color.B6.hex : color.B3.hex,
        dark: mode === 'light' ? color.B8.hex : color.B5.hex,
        contrastText: color.N1.hex,
      },
      secondary: {
        light: mode === 'light' ? color.O4.hex : color.O2.hex,
        main: mode === 'light' ? color.O7.hex : color.O4.hex,
        dark: mode === 'light' ? color.O9.hex : color.O6.hex,
        contrastText: color.N1.hex,
      },
      error: {
        light: mode === 'light' ? color.R1.hex : color.R1.hex,
        main: mode === 'light' ? color.R4.hex : color.R2.hex,
        dark: mode === 'light' ? color.R7.hex : color.R4.hex,
        contrastText: color.N1.hex,
      },
      warning: {
        light: mode === 'light' ? color.O1.hex : color.O1.hex,
        main: mode === 'light' ? color.O4.hex : color.O2.hex,
        dark: mode === 'light' ? color.O7.hex : color.O4.hex,
        contrastText: color.N1.hex,
      },
      info: {
        light: mode === 'light' ? color.B1.hex : color.B1.hex,
        main: mode === 'light' ? color.B4.hex : color.B2.hex,
        dark: mode === 'light' ? color.B7.hex : color.B4.hex,
        contrastText: color.N1.hex,
      },
      success: {
        light: mode === 'light' ? color.G1.hex : color.G1.hex,
        main: mode === 'light' ? color.G4.hex : color.G2.hex,
        dark: mode === 'light' ? color.G7.hex : color.G4.hex,
        contrastText: color.N1.hex,
      },
      grey: {
        50: color.N1.hex,
        100: color.N2.hex,
        200: color.N3.hex,
        300: color.N4.hex,
        400: color.N5.hex,
        500: color.N6.hex,
        600: color.N7.hex,
        700: color.N8.hex,
        800: color.N9.hex,
        900: color.N10.hex,
        A100: color.N2.hex,
        A200: color.N3.hex,
        A400: color.N5.hex,
        A700: color.N8.hex,
      },
    },
    color,
  };
};

const getTheme = (mode: Mode = 'light', overrides: any = {}) => {
  const mergedTheme = deepmerge(getVarnishDesignTokens(mode), overrides);
  return createTheme(mergedTheme);
};

export default { getVarnishDesignTokens, getTheme };
