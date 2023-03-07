/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { Header, Content } from '@allenai/varnish';
import logos from '@allenai/varnish/logos';

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Header bannerAlwaysVisible>
        <Header.Columns columns="auto 1fr">
          <Header.Logo
            href="http://allenai.org"
            label={<Header.AppName>Title</Header.AppName>}
            tagline={<Header.AppTagline>Tagline</Header.AppTagline>}
          >
            <logos.AI2Logo includeText={false} />
          </Header.Logo>
        </Header.Columns>
      </Header>
      <Content main>
        <div>Content!</div>
      </Content>
    </div>
  );
}
