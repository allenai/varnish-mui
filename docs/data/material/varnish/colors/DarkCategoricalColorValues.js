/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { darkCategoricalColor, dictionaryToArray } from '@allenai/varnish2';
import { ChartingGrid, ColorValues } from './ColorValues';

const darkCategoricalColorGroup = {
  darkCategorical: dictionaryToArray(darkCategoricalColor),
};

export default function DarkCategoricalColorValues() {
  return (
    <ChartingGrid id="darkCategoricalColor">
      <ColorValues
        colorGroupDict={darkCategoricalColorGroup}
        themeProp="darkCategoricalColor"
      />
    </ChartingGrid>
  );
}
