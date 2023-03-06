---
title: App Layout
githubLabel: 'varnish: app-layout'
---

# App Layout

<p class="description">Example of a basic application layout</p>

```jsx
import { Route, Switch } from 'react-router-dom';
import { Content, Footer, Header, VarnishApp } from '@allenai/varnish';
<VarnishApp>
  <Header>{/* see: varnish.allenai.org/components/header */}</Header>
  <Content main>
    <Switch>
      {ROUTES.map(({ path, exact, component: Component, componentProps }) => (
        <Route
          exact={exact}
          key={path}
          path={path}
          render={(props: any) => <Component {...props} {...componentProps} />}
        />
      ))}
    </Switch>
  </Content>
  <Footer />
</VarnishApp>;
```
