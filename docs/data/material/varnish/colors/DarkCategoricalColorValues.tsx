import * as React from 'react';
import { darkCategoricalColor, dictionaryToArray } from '@allenai/varnish2';
import { ChartingGrid, ColorValues, ColorGroupDict } from './ColorValues';

const darkCategoricalColorGroup: ColorGroupDict = {
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
