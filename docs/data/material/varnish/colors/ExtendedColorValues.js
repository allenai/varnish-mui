/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { color2 } from '@allenai/varnish';
import { ColorValues, ExtendedGrid } from './ColorValues';

const colorGroups = {
  blues: [color2.B5, color2.B4, color2.B3, color2.B2, color2.B1],
  aqua: [color2.A5, color2.A4, color2.A3, color2.A2, color2.A1],
  teals: [color2.T5, color2.T4, color2.T3, color2.T2, color2.T1],
  greens: [color2.G5, color2.G4, color2.G3, color2.G2, color2.G1],
  oranges: [color2.O5, color2.O4, color2.O3, color2.O2, color2.O1],
  reds: [color2.R5, color2.R4, color2.R3, color2.R2, color2.R1],
  fuchsias: [color2.F5, color2.F4, color2.F3, color2.F2, color2.F1],
  purples: [color2.P5, color2.P4, color2.P3, color2.P2, color2.P1],
  neutrals: [color2.N5, color2.N4, color2.N3, color2.N2, color2.N1],
};

export default function ExtendedColorValues() {
  return (
    <ExtendedGrid id="color">
      <ColorValues colorGroupDict={colorGroups} themeProp="color2" />
    </ExtendedGrid>
  );
}
