import { createTheme, ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { color, color2, darkCategoricalColor, lightCategoricalColor } from './colors';
import { paletteExtended } from './paletteExtended';

const fontFamily = [
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
].join(',');
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightBold = 700;

export const getVarnishDesignTokens = (): ThemeOptions => {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => `
          a {
            color: ${theme.paletteExtended.link.default};
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .linkContrast {
            color: ${theme.paletteExtended.link.contrast};
          }
        `,
      },
      MuiLink: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            textDecoration: 'none',
            ...(ownerState.variant === 'dark'
              ? {
                  color: theme.paletteExtended.link.contrast,
                }
              : {
                  color: theme.paletteExtended.link.default,
                }),
          }),
        },
      },
      MuiRating: {
        styleOverrides: {
          root: {
            color: color2.B3.hex,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          sizeSmall: () => ({
            fontSize: '0.875rem',
          }),
          sizeLarge: ({ theme }) => ({
            fontSize: theme.typography.button.fontSize,
          }),
        },
      },
    },
    typography: {
      fontFamily,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium: fontWeightRegular,
      fontWeightBold,
      h1: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '2.875rem',
        lineHeight: 1.3,
        letterSpacing: '0.025em',
      },
      h2: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '2.25rem',
        lineHeight: 1.3,
        letterSpacing: '0.025em',
      },
      h3: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1.875rem',
        lineHeight: 1.17,
        letterSpacing: '0.01875em',
      },
      h4: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1.5rem',
        lineHeight: 1.3,
        letterSpacing: '0.03125em',
      },
      h5: {
        color: color2.B5.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1.25rem',
        lineHeight: 1.2,
        letterSpacing: '0.03125em',
      },
      h6: {
        color: color2.B5.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1.125rem',
        lineHeight: 1.3,
        letterSpacing: '0.01875em',
      },
      subtitle1: {
        fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: '0.015625em',
      },
      subtitle2: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: '0.015625em',
      },
      body1: {
        fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: '1rem',
        lineHeight: 1.45,
        letterSpacing: '0.0175em',
      },
      body2: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1rem',
        lineHeight: 1.45,
        letterSpacing: '0.0175em',
      },
      button: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.01875em',
        textTransform: 'none',
      },
      caption: {
        color: color2.B5.hex,
        fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: '0.875rem',
        lineHeight: 1.4,
        letterSpacing: '0.015625em',
      },
      overline: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: '1.25rem',
        lineHeight: 2,
        letterSpacing: '0.03125em',
        textTransform: 'none',
      },
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
      text: {
        primary: color2.N5.hex,
        secondary: color2.B5.hex,
        disabled: color2.B2.hex,
      },
      divider: color2.N3.hex,
      background: {
        paper: color2.N1.hex,
        default: color2.white.hex,
      },
      action: {
        active: color2.B3.hex,
        hover: color2.B3.hex,
        selected: color2.B3.hex,
        focus: color2.B3.hex,
      },
    },
    paletteExtended,
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
