import { Indexable } from '../utils/base';
import { color2 } from './colors';

// add
export const extended = {
  background: {
    dark: color2.B5,
  },
  link: {
    default: color2.B3.hex,
    contrast: color2.B2.hex,
  },
};

export type ExtendedType = Indexable<typeof extended>;
