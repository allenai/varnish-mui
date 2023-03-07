import * as React from 'react';
import { Header, VarnishApp } from '@allenai/varnish';

export default function Demo() {
  return (
    <VarnishApp>
      <div style={{ width: '100%' }}>
        <Header.AI2Banner />
      </div>
    </VarnishApp>
  );
}
