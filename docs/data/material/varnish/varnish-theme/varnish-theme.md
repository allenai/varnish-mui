---
title: Varnish Theme
githubLabel: 'varnish: theme'
---

# Varnish Theme

<p class="description">The default Varnish Theme provides programmatic access to AI2 branded colors, typography and other properties related to the user interface. Using these values helps ensure your application's look and feel matches that of other AI2 applications.</p>

## Usage in a Styled Component

```jsx dark
import styled from 'styled-components';

const DarkBanner = styled.div`
  background: ${({ theme }) => theme.paletteExtended.background.dark};
  padding: ${({ theme }) => theme.spacing(0.5)} 0;
  line-height: 1;
`;
```

## Theme Values

{{"demo": "ThemeValuesDemo.js", "defaultCodeOpen": false}}

## Theme in Action

You can see the Theme in action in the [Typography section](/material-ui/react-typography/) and the [Varnish Colors section](/material-ui/varnish/colors/).
