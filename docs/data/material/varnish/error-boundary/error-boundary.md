---
title: Error Boundary
githubLabel: 'varnish: error-boundary'
---

# Error Boundary

<p class="description">Catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.</p>

By default, `VarnishApp` is wrapped in this ErrorBoundary component, so all runtime errors will be caught.

```js
import React from 'react';
import { VarnishApp } from '@allenai/varnish';

// Varnish app includes an ErrorBoundary
const App = () => (
  <VarnishApp>
    <YourApp />
  </VarnishApp>
);
```

However you can also use it directly. This is helpful if you want to have a sub section of a page
catch without affecting other sections.

```js
import React from 'react';
import { VarnishApp, ErrorBoundary } from '@allenai/varnish';

const App = () => (
  <VarnishApp>
    <ErrorBoundary>
      <YourComponentA />
    </ErrorBoundary>
    <ErrorBoundary>
      <YourComponentB />
    </ErrorBoundary>
  </VarnishApp>
);
```
