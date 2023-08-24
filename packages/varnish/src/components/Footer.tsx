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

interface TermsAndConditionsProps {
  variant?: FooterVariant;
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

export function FooterLinkSeparator() {
  return <React.Fragment> | </React.Fragment>;
}

export function PrivacyLink(props: TermsAndConditionsProps) {
  return (
    <Link variant={props.variant} href="https://allenai.org/privacy-policy">
      Privacy Policy
    </Link>
  );
}

export function TermsOfUseLink(props: TermsAndConditionsProps) {
  return (
    <Link variant={props.variant} href="https://allenai.org/terms">
      Terms of Use
    </Link>
  );
}

export function BusinessConductLink(props: TermsAndConditionsProps) {
  return (
    <Link variant={props.variant} href="https://allenai.org/business-code-of-conduct">
      Business Code of Conduct
    </Link>
  );
}

export function AI2TermsAndConditionsAllLinks(props: TermsAndConditionsProps) {
  return (
    <React.Fragment>
      <PrivacyLink variant={props.variant} />
      <FooterLinkSeparator />
      <TermsOfUseLink variant={props.variant} />
      <FooterLinkSeparator />
      <BusinessConductLink variant={props.variant} />
    </React.Fragment>
  );
}

export function AI2CopyrightLink(props: TermsAndConditionsProps) {
  return (
    <React.Fragment>
      <Link variant={props.variant} href="https://allenai.org">
        © The Allen Institute for Artificial Intelligence
      </Link>{' '}
      - All Rights Reserved
    </React.Fragment>
  );
}

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
              <AI2CopyrightLink variant={props.variant} />
              <FooterLinkSeparator />
              <AI2TermsAndConditionsAllLinks variant={props.variant} />
            </span>
          )}
        </StyledFooter>
      )}
    </VarnishContext.Consumer>
  );
}
