import * as React from 'react';
import { Color, Header, VarnishApp } from '@allenai/varnish';

export default function Demo() {
  const extendedTheme = {
    extended: {
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
