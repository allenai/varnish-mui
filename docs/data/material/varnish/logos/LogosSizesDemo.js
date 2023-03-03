import { logos } from '@allenai/varnish';
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
          <div>Small ('sm')</div>
          <logos.AI2Logo size="sm" />
        </Item>

        <Item>
          {/* For default size, no need to set <AI2Logo size="default" />
            since "default" is the default value of the size property. */}
          <div>Medium ('md')</div>
          <logos.AI2Logo />
        </Item>
        <Item>
          <div>Large i.e. 'lg'</div>
          <logos.AI2Logo size="lg" />
        </Item>
      </Stack>
    </Box>
  );
}
