/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { styled, css } from '@mui/material/styles';

export default function Demo() {
  const OuterDiv = styled('div')`
    width: 100%;
    height: 50px;
  `;

  const StyledParagraph = styled('p')(
    ({ theme }) =>
      css`
        font-family: ${theme.typography.body1.fontFamily}
        font-size: ${theme.typography.body1.fontSize};
      `,
  );

  return (
    <OuterDiv>
      <StyledParagraph>Test Paragraph Body 1 Size</StyledParagraph>
    </OuterDiv>
  );
}
