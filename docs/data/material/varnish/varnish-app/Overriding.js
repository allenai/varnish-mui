import * as React from 'react';
import { VarnishApp, Color, Header } from '@allenai/varnish';

export default function Demo() {
  const theme = {
    color: {
      B10: new Color('coolBlack', '#18191A', true),
    },
  };

  return (
    <VarnishApp theme={theme}>
      <Header.AI2Banner />
    </VarnishApp>
  );
}
