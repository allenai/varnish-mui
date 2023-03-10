import { ThemeOptions, createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import {
  color,
  color2,
  darkCategoricalColor,
  lightCategoricalColor,
  ColorType,
  Color2Type,
  LightCategoricalColorType,
  DarkCategoricalColorType,
} from './colors';
import { extended, ExtendedType } from './extended';

interface VarnishMuiTheme {
  extended: ExtendedType;
  color: ColorType;
  color2: Color2Type;
  darkCategoricalColor: DarkCategoricalColorType;
  lightCategoricalColor: LightCategoricalColorType;
}

interface VarnishMuiThemeOptions {
  extended?: ExtendedType;
  color?: ColorType;
  color2?: Color2Type;
  darkCategoricalColor?: DarkCategoricalColorType;
  lightCategoricalColor?: LightCategoricalColorType;
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dark: true;
    default: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme extends VarnishMuiTheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends VarnishMuiThemeOptions {}
}

export const getVarnishDesignTokens = (): ThemeOptions => {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => `
          a {
            color: ${theme.extended.link.default};
          }
          .linkContrast {
            color: ${theme.extended.link.contrast};
          }
        `,
      },
      MuiLink: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.variant === 'dark'
              ? {
                  color: theme.extended.link.contrast,
                }
              : {
                  color: theme.extended.link.default,
                }),
          }),
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.color === undefined || ownerState.color === 'default'
              ? {
                  color: theme.palette.text.primary,
                  background: color2.N1.hex,
                }
              : {}),
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
      MuiSwitch: {
        styleOverrides: {
          thumb: ({ ownerState }) => ({
            ...(ownerState.color === undefined || ownerState.color === 'default'
              ? {
                  backgroundColor: color2.B3.hex,
                }
              : {}),
          }),
          track: ({ ownerState }) => ({
            ...(ownerState.color === undefined || ownerState.color === 'default'
              ? {
                  backgroundColor: color2.A3.hex,
                }
              : {}),
          }),
        },
      },
    },
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
        disabled: color2.B3.hex,
        disabledBackground: color2.N5.hex,
        focus: color2.B3.hex,
      },
    },
    extended,
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
