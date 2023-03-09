import Link from '@mui/material/Link';
import * as React from 'react';
import styled from 'styled-components';
import { LayoutVariant, VarnishContext } from './VarnishContext';
import { Color } from '../theme/colors';

export type FooterVariant = 'default' | 'dark';

/* eslint-disable no-nested-ternary */

interface Props {
  variant?: FooterVariant;
  children?: React.ReactNode | React.ReactNode[];
  backgroundColor?: Color;
  className?: string;
}

const StyledFooter = styled(({ backgroundColor, isContrast, ...rest }) => <footer {...rest} />)<{
  backgroundColor?: Color;
  isContrast?: boolean;
  layout?: LayoutVariant;
}>`
  padding: 24px;
  color: ${({ isContrast, theme }) =>
    isContrast ? theme.palette.common.white : theme.palette.common.black};
  text-align: ${({ layout }) => (layout !== 'left-aligned' ? 'center' : null)};
  background-color: ${({ backgroundColor, isContrast, theme }) =>
    backgroundColor
      ? backgroundColor.hex
      : isContrast
      ? theme.paletteExtended.background.dark.hex
      : theme.palette.common.white};
`;

export function Footer(props: Props) {
  // TODO: Make custom styles for elements that have standardized padding across AI2
  return (
    <VarnishContext.Consumer>
      {({ layout }) => (
        <StyledFooter
          className={props.className}
          layout={layout}
          backgroundColor={props.backgroundColor}
          isContrast={props.variant === 'dark'}
        >
          {props.children ? (
            props.children
          ) : (
            <span>
              <Link variant={props.variant} href="https://allenai.org">
                © The Allen Institute for Artificial Intelligence
              </Link>{' '}
              - All Rights Reserved |{' '}
              <Link variant={props.variant} href="https://allenai.org/privacy-policy">
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link variant={props.variant} href="https://allenai.org/terms">
                Terms of Use
              </Link>{' '}
              |{' '}
              <Link variant={props.variant} href="https://allenai.org/business-code-of-conduct">
                Business Code of Conduct
              </Link>
            </span>
          )}
        </StyledFooter>
      )}
    </VarnishContext.Consumer>
  );
}
