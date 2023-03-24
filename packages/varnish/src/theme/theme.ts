import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { color, color2, darkCategoricalColor, lightCategoricalColor } from './colors';
import { paletteExtended } from './paletteExtended';
import { getTypographyStyle, pxToRem, pxToEm } from '../utils/base';

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

// exported so it can be used by other themes in the docs
export const getMuiCssBaselineStyleOverrides = (theme: Omit<Theme, 'components'>) => {
  return `
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
    ${getTypographyStyle(theme, 'h1')}
    ${getTypographyStyle(theme, 'h2')}
    ${getTypographyStyle(theme, 'h3')}
    ${getTypographyStyle(theme, 'h4')}
    ${getTypographyStyle(theme, 'h5')}
    ${getTypographyStyle(theme, 'h6')}
    p {
      ${getTypographyStyle(theme, 'body1', false)}
      margin: 16px 0;
    }
  `;
};

export const getVarnishDesignTokens = (): ThemeOptions => {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => getMuiCssBaselineStyleOverrides(theme),
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
            fontSize: pxToRem(14),
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
        fontSize: pxToRem(46),
        lineHeight: 1.3,
        letterSpacing: pxToEm(0.5),
        margin: '46px 0 13px',
      },
      h2: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(36),
        lineHeight: 1.3,
        letterSpacing: pxToEm(0.4),
        margin: '42px 0 16px',
      },
      h3: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(30),
        lineHeight: 1.17,
        letterSpacing: pxToEm(0.3),
        margin: '40px 0 17px',
      },
      h4: {
        color: color2.B3.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(24),
        lineHeight: 1.3,
        letterSpacing: pxToEm(0.5),
        margin: '38px 0 20px',
      },
      h5: {
        color: color2.B5.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(20),
        lineHeight: 1.2,
        letterSpacing: pxToEm(0.5),
        margin: '36px 0 22px',
      },
      h6: {
        color: color2.B5.hex,
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(18),
        lineHeight: 1.3,
        letterSpacing: pxToEm(0.3),
        margin: '34px 0 24px',
      },
      subtitle1: {
        fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(14),
        lineHeight: 1.5,
        letterSpacing: pxToEm(0.25),
      },
      subtitle2: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(14),
        lineHeight: 1.5,
        letterSpacing: pxToEm(0.25),
      },
      body1: {
        fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(16),
        lineHeight: 1.45,
        letterSpacing: pxToEm(0.28),
      },
      body2: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(16),
        lineHeight: 1.45,
        letterSpacing: pxToEm(0.28),
      },
      button: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(16),
        lineHeight: 1.5,
        letterSpacing: pxToEm(0.304),
        textTransform: 'none',
      },
      caption: {
        color: color2.B5.hex,
        fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(14),
        lineHeight: 1.4,
        letterSpacing: pxToEm(0.25),
      },
      overline: {
        fontFamily,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(20),
        lineHeight: 2,
        letterSpacing: pxToEm(0.5),
        textTransform: 'none',
      },
    },
    palette: {
      mode: 'light',
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
