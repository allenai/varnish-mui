import * as React from 'react';
import { styled, css } from '@mui/material/styles';

export default function Demo() {
  const Error = styled('div')(
    ({ theme }) =>
      css`
        width: 100%;
        text-align: center;
        margin-bottom: ${theme.spacing(0.5)};
        color: ${theme.palette.text.primary};
        background: ${theme.palette.error.light};
        border: 1px solid ${theme.palette.error.dark};
      `,
  );

  return (
    <div style={{ width: '100%' }}>
      <Error>I can&apos;t do that, Dave.</Error>
    </div>
  );
}
