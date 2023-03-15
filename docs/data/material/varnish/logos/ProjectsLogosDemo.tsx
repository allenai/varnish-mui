import * as React from 'react';
import { logos } from '@allenai/varnish2';
import { Box, Paper, Stack, styled } from '@mui/material';

export default function Demo() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <Box>
      <Stack spacing={2}>
        <Item>
          <div>AllenNLP</div>
          <logos.AllenNLP />
        </Item>

        <Item>
          <div>Aristo</div>
          <logos.Aristo />
        </Item>

        <Item>
          <div>Mosaic</div>
          <logos.Mosaic />
        </Item>

        <Item>
          <div>Prior</div>
          <logos.Prior />
        </Item>

        <Item>
          <div>Semantic Scholar</div>
          <logos.SemanticScholar />
        </Item>

        <Item>
          <div>Fairness</div>
          <logos.Fairness />
        </Item>

        <Item>
          <div>Incubator</div>
          <logos.Incubator />
        </Item>
      </Stack>
    </Box>
  );
}
