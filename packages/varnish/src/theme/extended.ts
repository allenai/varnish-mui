import { Indexable } from '../utils/base';
import { color2 } from './colors';

// add
export const extended = {
  background: {
    dark: color2.B5,
  },
};

export type ExtendedType = Indexable<typeof extended>;
