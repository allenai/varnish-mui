import * as React from 'react';
import { Content, Header, VarnishApp } from '@allenai/varnish';

import { BrowserRouter, NavLink } from "react-router-dom";
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

export default function Demo() {
    return (
        <VarnishApp>
            <Content>
                <Header.AI2Banner />
                <Router>
                    <ul>
                        <li>
                            <NavLink reloadDocument className={"linkContrast"} to="/material-ui/getting-started/overview/">To Getting Started</NavLink>
                        </li>
                        <li>
                            <NavLink reloadDocument to="/material-ui/varnish/app-layout">To Layout</NavLink>
                        </li>
                    </ul>
                </Router>
            </Content>
        </VarnishApp>
    );
}
