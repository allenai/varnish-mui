import * as React from 'react';
import { styled, css } from '@mui/material/styles';

export default function Demo() {
  const ColorDiv = styled('div', {
    shouldForwardProp: (prop) => prop !== 'col',
  })<{ col: string }>(
    ({ theme, col }) =>
      css`
        width: 100%;
        height: ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(0.5)};
        color: white;
        text-align: center;
        background: ${theme.color[col].toString()};
      `,
  );

  const colorsToRender = ['B8', 'B7', 'B6', 'O8', 'O7', 'O6'];

  return (
    <div style={{ width: '100%' }}>
      {colorsToRender.map((color) => (
        <ColorDiv key={color} col={color}>
          {color}
        </ColorDiv>
      ))}
    </div>
  );
}
