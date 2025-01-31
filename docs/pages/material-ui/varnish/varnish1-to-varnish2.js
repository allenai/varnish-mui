import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/material/varnish/varnish1-to-varnish2-migration/varnish1-to-varnish2.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
