import * as React from 'react';
import styled, { css } from 'styled-components';
import Box from '@mui/material/Box';

import { LayoutVariant, VarnishContext } from './VarnishContext';

export interface ContentProps {
  children: React.ReactNode | React.ReactNodeArray;
  /**
   * If true, a `<main />` tag is used, which tells web scrapers and accessibility devices
   * that the content is of significant importance. There should only be a single `<main />
   * element per page.
   */
  main?: boolean;
  className?: string;
  bgcolor?: string;
}

/* eslint-disable no-nested-ternary */

const contentCSS = css<{ layout?: LayoutVariant; bgcolor?: string }>`
  max-width: ${({ theme, layout }) =>
    layout === 'center-aligned' ? theme.breakpoints.values.lg : null};
  width: 100%;
  ${({ layout }) => (layout === 'center-aligned' ? 'margin: 0 auto;' : '')}
  padding: ${({ theme }) => theme.spacing(3)};

  // if the user passes a key to the color theme, use the mapped color,
  // else treat the string as a normal color string
  background: ${({ theme, bgcolor }) =>
    bgcolor ? (theme.color[bgcolor] ? theme.color[bgcolor] : bgcolor) : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    padding: ${({ theme }) => theme.spacing(1.5)};
  }
`;

const InternalContent = styled(({ main, layout, bgcolor, ...rest }) => (
  <Box component={main ? 'main' : 'div'} {...rest} />
))<{
  main?: boolean;
  layout?: LayoutVariant;
  bgcolor?: string;
}>`
  ${contentCSS}
`;

export function Content({ children, className, ...basicProps }: ContentProps) {
  return (
    <VarnishContext.Consumer>
      {({ layout }) => (
        <InternalContent layout={layout} className={className} {...basicProps}>
          {children}
        </InternalContent>
      )}
    </VarnishContext.Consumer>
  );
}

export default Content;
