import {
  ColorType,
  Color2Type,
  LightCategoricalColorType,
  DarkCategoricalColorType,
} from '../src/theme/colors';
import { PaletteExtendedType } from '../src/theme/paletteExtended';

interface VarnishMuiTheme {
  paletteExtended: PaletteExtendedType;
  color: ColorType;
  color2: Color2Type;
  darkCategoricalColor: DarkCategoricalColorType;
  lightCategoricalColor: LightCategoricalColorType;
}

interface VarnishMuiThemeOptions {
  paletteExtended?: PaletteExtendedType;
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
