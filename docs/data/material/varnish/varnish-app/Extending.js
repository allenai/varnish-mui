import * as React from 'react';
import styled from 'styled-components';
import { VarnishApp, Color } from '@allenai/varnish';

export default function Demo() {
  const theme2 = {
    color: {
      B100: new Color('Mr. Freeze', '#bbccff', false),
    },
  };

  const CoolH1 = styled.h1`
    color: ${({ theme }) => theme.color.B100};
  `;

  return (
    <VarnishApp theme={theme2}>
      <CoolH1>🥶 Brrrr....</CoolH1>
    </VarnishApp>
  );
}
