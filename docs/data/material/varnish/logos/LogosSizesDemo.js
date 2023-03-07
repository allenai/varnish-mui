/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import { logos } from '@allenai/varnish';
import { Box, Paper, Stack, styled } from '@mui/material';
import * as React from 'react';

export default function Demo() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <Box>
      <Stack spacing={2}>
        <Item>
          <div>Small (&apos;sm&apos;)</div>
          <logos.AI2Logo size="sm" />
        </Item>

        <Item>
          {/* For default size, no need to set <AI2Logo size="default" />
            since "default" is the default value of the size property. */}
          <div>Medium (&apos;md&apos;)</div>
          <logos.AI2Logo />
        </Item>
        <Item>
          <div>Large (&apos;lg&apos;)</div>
          <logos.AI2Logo size="lg" />
        </Item>
      </Stack>
    </Box>
  );
}
