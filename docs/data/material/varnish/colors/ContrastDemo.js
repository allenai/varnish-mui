/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { styled, css } from '@mui/material/styles';
import { color } from '@allenai/varnish';

export default function Demo() {
  const ColorDiv = styled('div', {
    shouldForwardProp: (prop) => prop !== 'col',
  })(
    ({ theme, col }) =>
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(0.5)};
        color: ${theme.color[col].useContrastText
          ? theme.palette.common.white
          : theme.palette.text.primary};
        background: ${theme.color[col].toString()};
        border: 1px solid
          ${theme.color[col].useContrastText
            ? theme.palette.common.white
            : theme.palette.text.primary};
      `,
  );

  const colorsToRender = [
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
  ];

  return (
    <div style={{ width: '100%' }}>
      {colorsToRender.map((c) => (
        <ColorDiv key={c} col={c}>
          {c} {color[c].useContrastText ? '(white)' : null}
        </ColorDiv>
      ))}
    </div>
  );
}
