---
title: AI2 Menu Pattern
githubLabel: 'varnish: menu-pattern'
---

# Menu

<p class="description">Describes how to create a proper menu per Skiff Template pattern.</p>

## Pattern

To achieve a menu like the one on [Skiff Template](https://skiff-template.apps.allenai.org/), you can use the following structure:

```jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import {
  Toolbar,
  Box,
  List,
  IconButton,
  Drawer,
  ListItem,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const theme = useTheme();
const greaterThanMd = useMediaQuery(theme.breakpoints.up('md'));

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

// when we are on a breakpoint greater than md, show a toolbar, else show a drawer.
<Toolbar variant="dense">
  {greaterThanMd ? (
    <>
      {ROUTES.map(({ path, label }) => (
        <Link key={path} to={path}>
          <ListItemButton selected={location.pathname === path}>
            {label}
          </ListItemButton>
        </Link>
      ))}
    </>
  ) : (
    <>
      {ROUTES.length > 1 ? (
        <Box component="nav">
          <IconButton edge="end" onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="right"
            open={menuOpen}
            onClose={handleMenuToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
          >
            <Menu>
              {ROUTES.map(({ path, label }) => (
                <ListItem key={path} disablePadding>
                  <Link to={path} onClick={handleMenuToggle}>
                    <DrawerMenuButton selected={location.pathname === path}>
                      {label}
                    </DrawerMenuButton>
                  </Link>
                </ListItem>
              ))}
            </Menu>
          </Drawer>
        </Box>
      ) : null}
    </>
  )}
</Toolbar>;

const Menu = styled(List)`
  && {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

const DrawerMenuButton = styled(ListItemButton)`
  && {
    min-width: 180px;
    max-width: 240px;
  }
`;
```
