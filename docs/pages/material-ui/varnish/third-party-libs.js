import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/material/varnish/third-party-libs/third-party-libs.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
