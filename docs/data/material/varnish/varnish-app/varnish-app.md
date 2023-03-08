---
title: Varnish App
githubLabel: 'varnish: varnish-app'
---

# Varnish App

<p class="description">A top-level container for `Varnish` applications.</p>

## When To Use

All applications should be wrapped in a `<VarnishApp>`. This ensures
Varnish is setup correctly. If you don't do this your application
probably won't compile, or if it does things probably won't work.

## Example Usage

```jsx
import React from 'react';
import { VarnishApp } from '@allenai/varnish';

const App = () => (
  <VarnishApp layout="left-aligned">
    <MainApp />
  </VarnishApp>
);

// Render
ReactDOM.render(<App />, document.getElementById('root'));
```

## Examples

### Default

You can use `<VarnishApp />` without parameters, in which case sensible
defaults will be applied.

{{"demo": "Default.js", "bg": true, "defaultCodeOpen": false}}

### Overriding

You can override theme values by setting the property you'd like to change.
The overrides are deeply merged with the default Varnish theme, which
means that defaults are used for unspecified values.

{{"demo": "Overriding.js", "bg": true, "defaultCodeOpen": false}}

### Extending

You can add properties to the theme, so that you can use them in custom
styles.

{{"demo": "Extending.js", "bg": true, "defaultCodeOpen": false}}

## API

| Property | Type                               | Default          | Description                                                                                             |
| :------- | :--------------------------------- | :--------------- | :------------------------------------------------------------------------------------------------------ |
| layout   | 'left-aligned' \| 'center-aligned' | 'center-aligned' | Changes the top level layout, which right now only impacts the horizontal alignment of your application |
| theme    | {}                                 | (Optional)       | Modifications to the VarnishTheme, which are deep-merged with the defaults.                             |
