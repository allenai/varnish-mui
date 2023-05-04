---
title: AI2 Menu Pattern
githubLabel: 'varnish: menu-pattern'
---

# Menu

<p class="description">Describes how to create a proper menu per Skiff Template pattern.</p>

## Pattern

To achieve a menu like the one on [Skiff Template](https://skiff-template-varnish2.apps.allenai.org/), you can use the following structure:

```jsx
import { List, ListItem, ListItemButton } from '@mui/material';

/**
 * An array capturing the available routes in your application. You can
 * add or remove routes here.
 */
const ROUTES: AppRoute[] = [
  {
    path: '/',
    label: 'Home',
    Component: Home,
  },
  {
    path: '/about',
    label: 'About',
    Component: About,
  },
];

// You need to define some routes for your menu to link to on your page such as in ROUTES
<Menu>
  {ROUTES.map(({ path, label }) => (
    <ListItem key={path} disablePadding>
      <Link to={path} onClick={handleMenuToggle}>
        <MenuButton selected={location.pathname === path}>{label}</MenuButton>
      </Link>
    </ListItem>
  ))}
</Menu>;

const Menu = styled(List)`
  && {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

const MenuButton = styled(ListItemButton)`
  && {
    min-width: 180px;
    max-width: 240px;
  }
`;
```
