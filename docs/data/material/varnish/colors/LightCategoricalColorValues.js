/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { lightCategoricalColor, dictionaryToArray } from '@allenai/varnish2';
import { ChartingGrid, ColorValues } from './ColorValues';

const lightCategoricalColorGroup = {
  lightCategorical: dictionaryToArray(lightCategoricalColor),
};

export default function LightCategoricalColorValues() {
  return (
    <ChartingGrid id="lightCategoricalColor">
      <ColorValues
        colorGroupDict={lightCategoricalColorGroup}
        themeProp="lightCategoricalColor"
      />
    </ChartingGrid>
  );
}
