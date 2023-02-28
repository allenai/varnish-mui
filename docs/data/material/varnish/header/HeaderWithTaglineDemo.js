import * as React from 'react';
import { Header } from '@allenai/varnish/header';
import { logos } from '@allenai/varnish/logos';

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Header alwaysVisible={true}>
        <Header.Logo
          href="http://allenai.org"
          label={<Header.AppName>Title</Header.AppName>}
          tagline={<Header.AppTagline>Tagline</Header.AppTagline>}
        >
          <logos.AI2Logo includeText={false} />
        </Header.Logo>
      </Header>
      <div>Content!</div>
    </div>
  );
}
