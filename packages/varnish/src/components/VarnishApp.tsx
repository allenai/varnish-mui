import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { LayoutVariant, DefaultAppLayoutProvider} from './VarnishContext';
import {  ErrorBoundary } from './ErrorBoundary';
import { Theme as VarnishTheme } from '@allenai/varnish';

interface Props {
    layout?: LayoutVariant;
    theme?: {};
    children: React.ReactNode | React.ReactNodeArray;
}

/**
 * A top level container for your application that handles errors cleanly,
 * makes the required theme available to child components, and sets up
 * the application layout.
 *
 * If the theme property is provided, it's deeply merged with the default Varnish
 * theme. Which means you can only provide the properties you'd like to override,
 * and those not provided will use the defaults.
 */
export const VarnishApp = ({ layout, theme, children }: Props) => {
    const mergedTheme = VarnishTheme.getTheme('light', theme);
    return (
        <StyledThemeProvider theme={mergedTheme}>
        <ThemeProvider theme={mergedTheme}>
            <ErrorBoundary>
                <DefaultAppLayoutProvider layout={layout || 'center-aligned'}>
                    {children}
                </DefaultAppLayoutProvider>
            </ErrorBoundary>
        </ThemeProvider>
        </StyledThemeProvider>
    );
};
