---
title: Varnish - Getting Started
githubLabel: 'varnish: getting-started'
---

# Getting Started

<p class="description">Getting Started with Varnish</p>

## Note About Versions

All new applications should be using `Varnish2`. However, many older applicaitons will still be using `Varnish`. [Documentation on deprecated version](https://varnish-deprecated.allenai.org/) is still availiable.

## Upgrading from Varnish to Varnish2

Upgrading older applications is non trivial. contact REVIZ if you feel this should happen.

## Getting Started

If you started your application from [Skiff Template](https://github.com/allenai/skiff-template),
then you're already using `Varnish`, as it comes installed by default.

However, if you didn't, follow these steps to use `Varnish`:

1.  Install `@allenai/varnish2` and all dependencies

    ```sh
    // with npm
    npm install @allenai/varnish2

    // with yarn
    yarn add @allenai/varnish2
    ```

2.  Wrap your `<YourApp />` in the `<VarnishApp />` component:

    ```jsx dark
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { VarnishApp } from '@allenai/varnish2';

    const App = () => (
      <VarnishApp>
        <YourApp />
      </VarnishApp>
    );
    ```

3.  Now that you have Varnish installed, you can start using it to style your application.

    ```jsx dark
    import { Footer } from '@allenai/varnish2';

    // use as any other React component
    const MyComponent = () => (
      <div>
        <h1>👋 Hello World</h1>
        <Footer />
      </div>
    );
    ```

## Material UI Components

`Varnish` consists of a few components and many styles that are automatically applied to all
[Material UI components](https://varnish.allenai.org/material-ui/). We encourage you to explore their
documentation and use any component that suits you.
