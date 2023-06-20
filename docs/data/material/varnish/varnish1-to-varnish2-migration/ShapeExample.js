/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { styled, css } from '@mui/material/styles';

export default function Demo() {
  const OuterDiv = styled('div')(
    ({ theme }) =>
      css`
        background-color: ${theme.color2.B5.hex}
        width: 100%;
        height: 50px;
      `,
  );

  const InnerDiv = styled('div')(
    ({ theme }) =>
      css`
        background-color: white
        width: 50%;
        margin-top: 10px;
        margin-left: 10px;
        border-raduis: ${theme.shape.borderRadius}
      `,
  );

  return (
    <OuterDiv>
      <InnerDiv>Test</InnerDiv>
    </OuterDiv>
  );
}
