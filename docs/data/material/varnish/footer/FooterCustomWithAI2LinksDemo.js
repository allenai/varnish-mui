/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import {
  Footer,
  PrivacyLink,
  TermsOfUseLink,
  FooterLinkSeparator,
} from '@allenai/varnish2';
import { useTheme } from '@mui/material/styles';

export default function Demo() {
  const theme = useTheme();

  return (
    <div style={{ width: '100%' }}>
      <Footer backgroundColor={theme.color2.G2}>
        Custom footer content - 🦶🏻 🦶🏼 🦶🏽 🦶🏾 🦶🏿
        <FooterLinkSeparator />
        <PrivacyLink />
        <FooterLinkSeparator />
        <TermsOfUseLink />
      </Footer>
    </div>
  );
}
