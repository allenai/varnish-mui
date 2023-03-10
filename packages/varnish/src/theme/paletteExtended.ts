import { Indexable } from '../utils/base';
import { color2 } from './colors';

// add colors here that should be uses as part of a palette that dont exist in the mui palette
export const paletteExtended = {
  background: {
    dark: color2.B5,
  },
  link: {
    default: color2.B3.hex,
    contrast: color2.B2.hex,
  },
};

export type PaletteExtendedType = Indexable<typeof paletteExtended>;
