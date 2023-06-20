import * as React from 'react';
import { ShareOnLinkedInButton } from '@allenai/varnish2';

export default function Demo() {
  return (
    <ShareOnLinkedInButton
      title="Allen AI"
      summary="The best AI company"
      url="https://allenai.org/"
    />
  );
}
