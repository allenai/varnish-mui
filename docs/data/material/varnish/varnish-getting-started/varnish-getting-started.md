---
title: Varnish - Getting Started
githubLabel: 'varnish: getting-started'
---

# Getting Started

<p class="description">Getting Started with Varnish2</p>

## Note About Versions

Older [documentation on Varnish-Deprecated](https://varnish-deprecated.allenai.org/components/table/) and [documentation on Varnish-1](https://varnish.allenai.org/components/getting_started) is still availiable. But, you should upgrade to varnish2, and if you’re not sure how, contact REVIZ.

## Getting Started

If you started your application from [Skiff Template](https://github.com/allenai/skiff-template),
then you're already using Varnish2, as it comes installed by default.

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

Varnish consists of a few components and many styles that are automatically applied to all
[Material UI components](https://mui.com/components/). We encourage you to explore their
documentation and use any component that suits you.
