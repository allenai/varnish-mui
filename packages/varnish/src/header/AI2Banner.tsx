import * as React from 'react';
import styled from 'styled-components';

import { AI2Logo } from '../logos/AI2Logo';
import {color as varnishColor } from '../colors';
import theme from '../theme';

export interface AI2BannerProps {
    children?: React.ReactNode;
}

const varnishDarkTheme = theme.getTheme('dark');

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
    padding-left: ${varnishDarkTheme.spacing(3)};
    padding-right: ${varnishDarkTheme.spacing(3)};
`;

const DarkBanner = styled.div`
    background: ${varnishDarkTheme.color.B10.toString()};
    padding: ${varnishDarkTheme.spacing(0.5)} 0;
    line-height: 1;
`;
