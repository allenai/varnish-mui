import hexRgb from 'hex-rgb';
import { Dictionary, Indexable } from '../utils/base';

export class RGBA {
  constructor(public r: number, public g: number, public b: number, public a: number) {}

  toString() {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }
}

// convert a hex color string to a RGBA
export function hexToRgb(hex: string): RGBA {
  const rgba = hexRgb(hex);
  return new RGBA(rgba.red, rgba.green, rgba.blue, rgba.alpha);
}

export class Color {
  public rgba: RGBA;

  constructor(public displayName: string, public hex: string, public useContrastText?: boolean) {
    this.hex = hex.toUpperCase();
    this.rgba = hexToRgb(hex);
  }

  toString() {
    return this.hex;
  }
}

// latest and greatest colors.  color will eventually be depricated.
export const color2: Dictionary<Color> = {
  R1: new Color('R1', '#FFE1E0'),
  R2: new Color('R2', '#FF9F9E'),
  R3: new Color('R3', '#F7605F', true),
  R4: new Color('R4', '#D63F3F', true),
  R5: new Color('R5', '#932222', true),
  O1: new Color('O1', '#FFF1C4'),
  O2: new Color('O2', '#FFD45D'),
  O3: new Color('O3', '#FFBB00', true),
  O4: new Color('O4', '#FF9100', true),
  O5: new Color('O5', '#DD6502', true),
  G1: new Color('G1', '#C1F7E6'),
  G2: new Color('G2', '#70DDBA'),
  G3: new Color('G3', '#1EC28E', true),
  G4: new Color('G4', '#0A8F6B', true),
  G5: new Color('G5', '#005340', true),
  T1: new Color('T1', '#E6FDFE'),
  T2: new Color('T2', '#9AE7EC'),
  T3: new Color('T3', '#16C4CF', true),
  T4: new Color('T4', '#078E9E', true),
  T5: new Color('T5', '#004752', true),
  A1: new Color('A1', '#F2FCFF'),
  A2: new Color('A2', '#B5F0FF'),
  A3: new Color('A3', '#4DE1FF', true),
  A4: new Color('A4', '#01A2CA', true),
  A5: new Color('A5', '#054976', true),
  B1: new Color('B1', '#F0F7FF'),
  B2: new Color('B2', '#80BDFF'),
  B3: new Color('B3', '#265ED4', true),
  B4: new Color('B4', '#1B4596', true),
  B5: new Color('B5', '#223367', true),
  P1: new Color('P1', '#E6E3F7'),
  P2: new Color('P2', '#B7AFEB'),
  P3: new Color('P3', '#7446F2', true),
  P4: new Color('P4', '#5C50A4', true),
  P5: new Color('P5', '#271F55', true),
  F1: new Color('F1', '#FDF7FC'),
  F2: new Color('F2', '#E7A2DE'),
  F3: new Color('F3', '#D864C9', true),
  F4: new Color('F4', '#A44397', true),
  F5: new Color('F5', '#65295D', true),
  N1: new Color('N1', '#F8F9FA'),
  N2: new Color('N2', '#E8ECF2'),
  N3: new Color('N3', '#AEB7C4', true),
  N4: new Color('N4', '#616C7A', true),
  N5: new Color('N5', '#47515C', true),
  black: new Color('Black', '#000', true),
  white: new Color('White', '#FFF'),
  transparent: new Color('Transparent', '#00000000'),
};

export type Color2Type = Indexable<typeof color2>;

// temp: use this to lookup new color from old
export const color: Dictionary<Color> = {
  R1: color2.R1,
  R2: color2.R1,
  R3: color2.R2,
  R4: color2.R2,
  R5: color2.R3,
  R6: color2.R3,
  R7: color2.R4,
  R8: color2.R4,
  R9: color2.R5,
  R10: color2.R5,
  O1: color2.O1,
  O2: color2.O1,
  O3: color2.O2,
  O4: color2.O2,
  O5: color2.O3,
  O6: color2.O3,
  O7: color2.O4,
  O8: color2.O4,
  O9: color2.O5,
  O10: color2.O5,
  G1: color2.G1,
  G2: color2.G1,
  G3: color2.G2,
  G4: color2.G2,
  G5: color2.G3,
  G6: color2.G3,
  G7: color2.G4,
  G8: color2.G4,
  G9: color2.G5,
  G10: color2.G5,
  T1: color2.T1,
  T2: color2.T1,
  T3: color2.T2,
  T4: color2.T2,
  T5: color2.T3,
  T6: color2.T3,
  T7: color2.T4,
  T8: color2.T4,
  T9: color2.T5,
  T10: color2.T5,
  A1: color2.A1,
  A2: color2.A1,
  A3: color2.A2,
  A4: color2.A2,
  A5: color2.A3,
  A6: color2.A3,
  A7: color2.A4,
  A8: color2.A4,
  A9: color2.A5,
  A10: color2.A15,
  B1: color2.B1,
  B2: color2.B1,
  B3: color2.B2,
  B4: color2.B2,
  B5: color2.B3,
  B6: color2.B3,
  B7: color2.B4,
  B8: color2.B4,
  B9: color2.B5,
  B10: color2.B5,
  P1: color2.P1,
  P2: color2.P1,
  P3: color2.P2,
  P4: color2.P2,
  P5: color2.P3,
  P6: color2.P3,
  P7: color2.P4,
  P8: color2.P4,
  P9: color2.P5,
  P10: color2.P5,
  M1: color2.F1,
  M2: color2.F1,
  M3: color2.F2,
  M4: color2.F2,
  M5: color2.F3,
  M6: color2.F3,
  M7: color2.F4,
  M8: color2.F4,
  M9: color2.F5,
  M10: color2.F5,
  N1: color2.N1,
  N2: color2.N1,
  N3: color2.N2,
  N4: color2.N2,
  N5: color2.N3,
  N6: color2.N3,
  N7: color2.N4,
  N8: color2.N4,
  N9: color2.N5,
  N10: color2.N5,
  black: color2.Black,
  white: color2.White,
};

export type ColorType = Indexable<typeof color>;

export const lightCategoricalColor = {
  Red: { ...color2.R5, displayName: 'Red' },
  Orange: { ...color2.O5, displayName: 'Orange' },
  Aqua: { ...color2.A5, displayName: 'Aqua' },
  Teal: { ...color2.T4, displayName: 'Teal' },
  Blue: { ...color2.B3, displayName: 'Blue' },
  Fuchsia: { ...color2.F5, displayName: 'Fuchsia' },
  Purple: { ...color2.P4, displayName: 'Purple' },
  Green: { ...color2.G5, displayName: 'Green' },
};

export type LightCategoricalColorType = Indexable<typeof color>;

export const darkCategoricalColor = {
  Red: { ...color2.R2, displayName: 'Red' },
  Orange: { ...color2.O2, displayName: 'Orange' },
  Aqua: { ...color2.A2, displayName: 'Aqua' },
  Teal: { ...color2.T2, displayName: 'Teal' },
  Blue: { ...color2.B2, displayName: 'Blue' },
  Fuchsia: { ...color2.F2, displayName: 'Fuchsia' },
  Purple: { ...color2.P2, displayName: 'Purple' },
  Green: { ...color2.G2, displayName: 'Green' },
};

export type DarkCategoricalColorType = Indexable<typeof color>;

// use to convert a set of color ids top their hex values
// e.g. SequenceColors = ColorsIdsToHexVals(['N1', 'N3', 'N5', 'N7', 'N9']);
export const colorsIdsToHexVals = (colorIds: Array<keyof typeof color>) =>
  colorIds.map((k) => color[k].hex);
export const colorMapToHexVals = (
  colorMap: typeof darkCategoricalColor | typeof lightCategoricalColor | typeof color,
) => Object.values(colorMap).map((v) => v.hex);
