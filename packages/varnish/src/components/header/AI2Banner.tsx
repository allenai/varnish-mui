import * as React from 'react';
import styled from 'styled-components';
import { AI2Logo } from '../logos/AI2Logo';
import { Content } from '../Content';

export interface AI2BannerProps {
  children?: React.ReactNode;
}

export const BannerLink = styled.a`
  display: inline-block;
  padding: 5px 0 2px 0;
`;

const BannerContent = styled(Content)`
  padding-top: 0;
  padding-bottom: 0;
`;

const DarkBanner = styled.div`
  background: ${({ theme }) => theme.paletteExtended.background.dark};
  padding: ${({ theme }) => theme.spacing(0.5)} 0;
  line-height: 1;
`;

export const AI2Banner = React.forwardRef<HTMLDivElement, AI2BannerProps>(({ children }) => (
  <DarkBanner>
    <BannerContent>
      {children || (
        <BannerLink href="https://allenai.org">
          <AI2Logo color="white" size="sm" />
        </BannerLink>
      )}
    </BannerContent>
  </DarkBanner>
));
