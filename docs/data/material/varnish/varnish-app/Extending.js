/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Color } from '@allenai/varnish';
import { VarnishApp } from '@allenai/varnish/components/VarnishApp';

export default function Demo() {
  const extendedTheme = {
    color: {
      Freeze: new Color('Mr. Freeze', '#bbccff', false),
    },
  };

  const CoolH1 = styled.h1`
    color: ${({ theme }) => theme.color.Freeze};
  `;

  return (
    <VarnishApp theme={extendedTheme}>
      <CoolH1>🥶 Brrrr....</CoolH1>
    </VarnishApp>
  );
}
