---
title: Varnish - Getting Started
githubLabel: 'varnish: getting-started'
---

# Getting Started

<p class="description">Getting Started with Varnish</p>

## Note About Versions

All new applications should be using `Varnish2`. However, many older applications will still be using `Varnish`. [Documentation on deprecated version](https://varnish-deprecated.apps.allenai.org/) is still availiable.

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

1.  Add Varnish fonts by importing them in your index.html.

    ```jsx
    <head>
      ...
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
      />
    </head>
    ```

1.  Wrap your `<YourApp />` in the `<VarnishApp />` component:

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { VarnishApp } from '@allenai/varnish2/components';

    const App = () => (
      <VarnishApp>
        <YourApp />
      </VarnishApp>
    );
    ```

1.  Now that you have Varnish installed, you can start using it to style your application.

    ```jsx
    import { Footer } from '@allenai/varnish2/components';

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
[Material UI components](https://varnish.allenai.org/material-ui/getting-started/supported-components/). We encourage you to explore their
documentation and use any component that suits you.
