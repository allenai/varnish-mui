import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/material/varnish/varnish-getting-started/varnish-getting-started.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
