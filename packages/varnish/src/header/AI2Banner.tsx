import * as React from 'react';
import styled from 'styled-components';

import { AI2Logo } from '../logos/AI2Logo';
import {color as varnishColor } from '../colors';

export interface AI2BannerProps {
    children?: React.ReactNode;
}

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

export const BannerLink = styled.a`
    display: inline-block;
    padding: 5px 0 2px 0;
`;

const BannerContent = styled.div`
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 24px;
    padding-right: 24px;
`;

const DarkBanner = styled.div`
    background: ${varnishColor.B10.toString()};
    padding: ${spacing(0.5)} 0;
    line-height: 1;
`;
