/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { styled, css } from '@mui/material/styles';
import { Stack } from '@mui/material';

export default function Demo() {
  const ColorDiv = styled('div', {
    shouldForwardProp: (prop) => prop !== 'col',
  })(
    ({ theme, col }) =>
      css`
        width: 100%;
        height: ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(0.5)};
        color: white;
        text-align: center;
        background: ${theme.color2[col].toString()};
      `,
  );

  const colorsToRender = ['B4', 'B3', 'B2', 'O4', 'O3', 'O2'];

  return (
    <Stack spacing={1} style={{ width: '100%' }}>
      {colorsToRender.map((color) => (
        <ColorDiv key={color} col={color}>
          {color}
        </ColorDiv>
      ))}
    </Stack>
  );
}
