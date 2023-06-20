/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { styled, css } from '@mui/material/styles';

export default function Demo() {
  const BackgroundDiv = styled('div')(
    ({ theme }) =>
      css`
        width: 100%;
        text-align: center;
        margin: ${theme.spacing(0.5)};
        background-color: ${theme.color2.B5.hex};
        color: ${theme.color2.N2.hex};
        font-family: ${theme.typography.body1.fontFamily};
      `,
  );

  return (
    <div style={{ width: '100%' }}>
      <BackgroundDiv>
        © The Allen Institute for Artificial Intelligence
      </BackgroundDiv>
    </div>
  );
}
