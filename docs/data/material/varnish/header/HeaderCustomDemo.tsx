import * as React from 'react';
import { pxToRem, color, Header } from '@allenai/varnish';
import logos from '@allenai/varnish/logos';
import styled from 'styled-components';

const Tagline = {
  Container: styled.span`
    display: flex;
    align-items: center;
    gap: 1ch;
  `,
  Text: styled.em`
    color: ${color.N1.toString()};
    font-size: ${pxToRem(13)};
  `,
};

export default function Demo() {
  const customBanner = (
    <Header.AI2Banner>
      <Tagline.Container>
        <Tagline.Text>A service of</Tagline.Text>
        <logos.AI2Logo size="sm" color="white" />
      </Tagline.Container>
    </Header.AI2Banner>
  );
  return (
    <div style={{ width: '100%' }}>
      <Header customBanner={customBanner} bannerAlwaysVisible>
        <Header.Columns columns="auto">
          <logos.AI2Logo />
        </Header.Columns>
      </Header>
    </div>
  );
}
