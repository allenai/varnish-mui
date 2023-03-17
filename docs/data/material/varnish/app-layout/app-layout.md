---
title: App Layout
githubLabel: 'varnish: app-layout'
---

# App Layout

<p class="description">Example of a standard application layout</p>

## Basic Usage

```jsx
import { Content, Footer, Header, VarnishApp } from '@allenai/varnish2';

<VarnishApp>
  <div>
    <Header>{/* see: varnish.allenai.org/material-ui/varnish/header/ */}</Header>
    <Content main>
      Hello World
    </Content>
    <Footer />
  <div>
</VarnishApp>;
```

## With React Router

```jsx
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import { Content, Footer, Header, VarnishApp } from '@allenai/varnish2';

<BrowserRouter>
  <VarnishApp>
    <div>
      <Header>{/* see: varnish.allenai.org/material-ui/varnish/header/ */}</Header>
      <Content main>
        <div>
          {ROUTES.map(({ path, label }) => (
            <Link key={path} to={path}>
                {label}
            </Link>
          ))}
        </div>
        <Routes>
          {ROUTES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Content>
      <Footer />
    <div>
  </VarnishApp>
</BrowserRouter>;
```
