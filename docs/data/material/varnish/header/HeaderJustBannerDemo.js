import * as React from 'react';
import { Header } from '@allenai/varnish/header';

export default function Demo() {
  // By default, the header with no children props has just the default AI2 banner
  return (
    <div style={{ width: '100%' }}>
      <Header bannerAlwaysVisible={true} />
    </div>
  );
}
