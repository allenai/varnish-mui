/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { Color, Header, VarnishApp } from '@allenai/varnish2';

export default function Demo() {
  const extendedTheme = {
    paletteExtended: {
      background: {
        // replacing dark with a new color
        dark: new Color('coolGreen', '#18991A', true),
      },
    },
  };

  return (
    <VarnishApp theme={extendedTheme}>
      <div style={{ width: '100%' }}>
        <Header.AI2Banner />
      </div>
    </VarnishApp>
  );
}
