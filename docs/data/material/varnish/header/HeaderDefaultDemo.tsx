import * as React from 'react';
import { Header } from '@allenai/varnish2';

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Header bannerAlwaysVisible>
        <Header.Columns columns="auto 1fr">
          <Header.Logo label={<Header.AppName>Title</Header.AppName>} />
        </Header.Columns>
      </Header>
    </div>
  );
}
