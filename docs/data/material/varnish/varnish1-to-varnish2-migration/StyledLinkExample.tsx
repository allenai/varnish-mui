import * as React from 'react';
import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function StyledLinkExample() {
  const theme = useTheme();
  return (
    <div style={{ width: '100%', backgroundColor: theme.color2.B5.hex }}>
      <Link variant={'dark'} href="https://allenai.org">
        © The Allen Institute for Artificial Intelligence
      </Link>
    </div>
  );
}
