/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { useTheme } from '@mui/material/styles';

export default function ShapeExample() {
  const theme = useTheme();
  return (
    <div
      style={{ width: '100%', height: '50px', backgroundColor: theme.color2.B5.hex }}
    >
      <div
        style={{
          marginTop: '10px',
          marginLeft: '10px',
          width: '50%',
          backgroundColor: 'white',
          borderRadius: theme.shape.borderRadius,
        }}
      >
        Test
      </div>
    </div>
  );
}
