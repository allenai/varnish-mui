import * as React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { AI2Logo, LogoSize } from '../logos/AI2Logo';
import { Content } from '../Content';

export interface AI2BannerProps {
  children?: React.ReactNode;
  size?: LogoSize;
  controls?: React.ReactNode;
  blackAndWhite?: boolean;
}

export const BannerLink = styled.a`
  display: inline-block;
  padding: 5px 0 2px 0;
`;

const BannerContent = styled(Content)`
  padding-top: 0;
  padding-bottom: 0;
`;

const StyledBanner = styled.div<{ blackAndWhite?: boolean }>`
  background: ${({ theme, blackAndWhite,  }) => blackAndWhite ? `black` : theme.paletteExtended.background.dark};
  padding: ${({ theme }) => theme.spacing(0.5)} 0;
  line-height: 1;
`;

export const AI2Banner = React.forwardRef<HTMLDivElement, AI2BannerProps>(({ children, size, blackAndWhite, controls }) => (
  <StyledBanner blackAndWhite={blackAndWhite}>
    <BannerContent>
      {children || (
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item>
              <BannerLink href="https://allenai.org">
                  <AI2Logo color="white" size={size || "sm"}/>
              </BannerLink>
          </Grid>
          <Grid item>
              {controls || null}
          </Grid>
      </Grid>
      )}
    </BannerContent>
  </StyledBanner>
));
