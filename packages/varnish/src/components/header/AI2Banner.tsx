import * as React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { AI2Logo, LogoSize } from '../logos/AI2Logo';
import { Content } from '../Content';

export interface AI2BannerProps {
  children?: React.ReactNode;
  logoSize?: LogoSize;
  endSlot?: React.ReactNode; // a space on the right side of the banner for additional content
  grayscale?: boolean;
}

export const BannerLink = styled.a`
  display: inline-block;
  padding: 5px 0 2px 0;
`;

const BannerContent = styled(Content)`
  padding-top: 0;
  padding-bottom: 0;
`;

const StyledBanner = styled.div<{ grayscale?: boolean }>`
  background: ${({ theme, grayscale }) =>
    grayscale ? `black` : theme.paletteExtended.background.dark};
  padding: ${({ theme }) => theme.spacing(0.5)} 0;
  line-height: 1;
`;

export const AI2Banner = React.forwardRef<HTMLDivElement, AI2BannerProps>(
  ({ children, logoSize, grayscale, endSlot }) => (
    <StyledBanner grayscale={grayscale}>
      <BannerContent>
        {children || (
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item>
              <BannerLink href="https://allenai.org">
                <AI2Logo color="white" size={logoSize || 'sm'} />
              </BannerLink>
            </Grid>
            {endSlot && <Grid item>{endSlot}</Grid>}
          </Grid>
        )}
      </BannerContent>
    </StyledBanner>
  ),
);
