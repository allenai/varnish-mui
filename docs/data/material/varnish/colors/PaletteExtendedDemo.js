/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { styled, css } from '@mui/material/styles';
import Link from '@mui/material/Link';

export default function Demo() {
  const BackgroundDiv = styled('div')(
    ({ theme }) =>
      css`
        width: 100%;
        text-align: center;
        margin-bottom: ${theme.spacing(0.5)};
        background: ${theme.paletteExtended.background.dark.hex};
      `,
  );

  return (
    <div style={{ width: '100%' }}>
      <BackgroundDiv>
        <Link variant="dark" href="https://allenai.org">
          © The Allen Institute for Artificial Intelligence
        </Link>
      </BackgroundDiv>
    </div>
  );
}
