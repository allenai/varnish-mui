import * as React from 'react';
import { Header } from '@allenai/varnish';
import { VarnishApp } from '@allenai/varnish/components/VarnishApp';

export default function Demo() {
  return (
    <VarnishApp>
      <div style={{ width: '100%' }}>
        <Header.AI2Banner />
      </div>
    </VarnishApp>
  );
}
