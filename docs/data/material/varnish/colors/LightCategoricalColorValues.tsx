import * as React from 'react';
import { lightCategoricalColor, dictionaryToArray } from '@allenai/varnish2';
import { ChartingGrid, ColorValues, ColorGroupDict } from './ColorValues';

const lightCategoricalColorGroup: ColorGroupDict = {
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
