import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import CssBaseline from '@mui/material/CssBaseline';
import { deepmerge } from 'packages/mui-utils/';
import { DefaultAppLayoutProvider, LayoutVariant } from './VarnishContext';
import { ErrorBoundary } from './ErrorBoundary';
import { getTheme } from '../theme';

export interface VarnishAppProps {
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
export function VarnishApp({ layout, theme, children }: VarnishAppProps) {

  const mergedTheme = createTheme(deepmerge(getTheme(theme), {
    components: {
      MuiContainer: {
        defaultProps: {
          disableGutters: true,
        }
      }
    }
  }));

  return (
    <StyledThemeProvider theme={mergedTheme}>
      <ThemeProvider theme={mergedTheme}>
        <CssBaseline />
        <ErrorBoundary>
          <DefaultAppLayoutProvider layout={layout || 'center-aligned'}>
            {children}
          </DefaultAppLayoutProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledThemeProvider>
  );
}

export default VarnishApp;
