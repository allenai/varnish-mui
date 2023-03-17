import * as React from 'react';
import styled from 'styled-components';
import { Content, Header, VarnishApp } from '@allenai/varnish2';

import { BrowserRouter, NavLink } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

// This is something we have to do to play nicely with Material UI's docs pages.
// This should not be needed when utilizing React Router on other web pages.
function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
}

const DarkBackground = styled.li`
  background: ${({ theme }) => theme.paletteExtended.background.dark};
  padding: ${({ theme }) => theme.spacing(1)};
`;

const LiteBackground = styled(DarkBackground)`
  background: ${({ theme }) => theme.palette.common.white};
`;

export default function Demo() {
  return (
    <Router>
      <VarnishApp>
        <div style={{ width: '100%' }}>
          <Header.AI2Banner />
          <Content main>
            <ul>
              <DarkBackground>
                <NavLink
                  reloadDocument
                  className={'linkContrast'}
                  to="/material-ui/getting-started/overview/"
                >
                  Link on dark background
                </NavLink>
              </DarkBackground>
              <LiteBackground>
                <NavLink reloadDocument to="/material-ui/varnish/app-layout">
                  Link on lite background
                </NavLink>
              </LiteBackground>
            </ul>
          </Content>
        </div>
      </VarnishApp>
    </Router>
  );
}
