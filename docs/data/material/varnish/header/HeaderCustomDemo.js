import { pxToRem, color } from '@allenai/varnish';
import logos from '@allenai/varnish/logos';
import { Header } from '@allenai/varnish/header';
import * as React from 'react';
import styled from 'styled-components';
import { AI2Banner } from '@allenai/varnish/header/AI2Banner';

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
    <AI2Banner>
      <Tagline.Container>
        <Tagline.Text>A service of</Tagline.Text>
        <logos.AI2Logo size="sm" color="white" />
      </Tagline.Container>
    </AI2Banner>
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
