import * as React from 'react';
import { VarnishApp, Header } from '@allenai/varnish';

export default function Demo() {
  return (
    <VarnishApp>
      <div style={{ width: '100%' }}>
        <Header.AI2Banner />
      </div>
    </VarnishApp>
  );
}
