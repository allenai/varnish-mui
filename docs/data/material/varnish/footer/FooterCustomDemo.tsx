import * as React from 'react';
import { Footer } from '@allenai/varnish2';
import { useTheme } from '@mui/material/styles';

export default function Demo() {
  const theme = useTheme();

  return (
    <div style={{ width: '100%' }}>
      <Footer backgroundColor={theme.color2.G2}>
        Custom footer content - 🦶🏻 🦶🏼 🦶🏽 🦶🏾 🦶🏿
      </Footer>
    </div>
  );
}
