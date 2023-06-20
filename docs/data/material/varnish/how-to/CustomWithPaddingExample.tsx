import * as React from 'react';
import { styled, css } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function Demo() {
  const CustomButton = styled(Button)(
    ({ theme }) =>
      css`
        width: 50%;
        text-align: center;
        background-color: ${theme.color2.T4.hex};
        padding: ${theme.spacing(3)};
        font-size: ${theme.typography.h4.fontSize};
        color: black;
      `,
  );

  return (
    <div style={{ width: '100%' }}>
      <div>
        <CustomButton>👾 🤖 👽 Custom 👾 🤖 👽</CustomButton>
      </div>
    </div>
  );
}
