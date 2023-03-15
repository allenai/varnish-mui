import * as React from 'react';
import { styled, css } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { color2 } from '@allenai/varnish2';

export default function Demo() {
  const ColorDiv = styled('div', {
    shouldForwardProp: (prop) => prop !== 'col',
  })<{ col: string }>(
    ({ theme, col }) =>
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(0.5)};
        color: ${theme.color2[col].useContrastText
          ? theme.palette.common.white
          : theme.palette.text.primary};
        background: ${theme.color2[col].toString()};
        border: 1px solid
          ${theme.color2[col].useContrastText
            ? theme.palette.common.white
            : theme.palette.text.primary};
      `,
  );

  const colorsToRender = ['B1', 'B2', 'B3', 'B4', 'B5'];

  return (
    <Stack spacing={1} style={{ width: '100%' }}>
      {colorsToRender.map((c) => (
        <ColorDiv key={c} col={c}>
          {c} {color2[c].useContrastText ? '(white)' : null}
        </ColorDiv>
      ))}
    </Stack>
  );
}
