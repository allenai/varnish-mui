---
title: varnish-with-react-router
githubLabel: 'varnish: varnish-with-react-router'
---

# Varnish With React Router

<p class="description">AI2 Varnish With React Router</p>

This is documentation for how you can use React Router in a Varnish App and inherit Varnish theming for links.

[React Router](https://reactrouter.com/en/main) is a tool commonly used for client-side routing. You can pull this into your Varnish App and by default get the Varnish theming for react-router links. Below is an example of how this can look when routing to pages and getting a scroll-to-top experience upon navigating to a page.

The 'To Getting Started' example link below shows how to employ the contrast colors of Varnish links via the linkContrast class if you are using a dark theme.

## Example

{{"demo": "SimpleNav.js", "bg": true}}

## ScrollToTopOnPageChange

A common function you may want to add to you React Router Application to auto scroll the user to the top of a page when they navigate to a new page.

```jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnPageChange = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};
```

### Usage

```jsx
import React from 'react';
import { VarnishApp } from '@allenai/varnish2/components';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <ScrollToTopOnPageChange />
  <VarnishApp>
    <App />
  </VarnishApp>
</BrowserRouter>;
```
