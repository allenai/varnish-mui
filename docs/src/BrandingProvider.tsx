import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { brandingLightTheme } from 'docs/src/modules/brandingTheme';
import { NextNProgressBar } from 'docs/src/modules/components/AppFrame';
import SkipLink from 'docs/src/modules/components/SkipLink';
import MarkdownLinks from 'docs/src/modules/components/MarkdownLinks';
import { getTheme } from '@allenai/varnish2';
import { deepmerge } from '@mui/utils';

interface BrandingProviderProps {
  children: React.ReactNode;
  /**
   * If not `undefined`, the provider is considered nesting and does not render NextNProgressBar & CssBaseline
   */
  mode?: 'light' | 'dark';
}

export default function BrandingProvider(props: BrandingProviderProps) {
  const { children, mode: modeProp } = props;
  // bring in varnish overrides
  const vTheme = getTheme();
  const varnishTheme = deepmerge(brandingLightTheme, vTheme);
  return (
    <ThemeProvider theme={modeProp ? () => varnishTheme : varnishTheme}>
      {modeProp ? null : <NextNProgressBar />}
      {modeProp ? null : <CssBaseline />}
      {modeProp ? null : <SkipLink />}
      {modeProp ? null : <MarkdownLinks />}
      {children}
    </ThemeProvider>
  );
}
