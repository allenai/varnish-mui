import { AppBar, Collapse, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
// import { Layout } from 'antd';

// import { Content as VContent } from '../Layout';
import { AI2Banner } from './AI2Banner';
import { color as varnishColor } from '../colors';

// This is an alias we create so that the user doesn't have to mix abstraction
// levels when implemnting something more custom. This way the user can do everything
// with the <Header.*> components, and doesn't need to use the antd ones.
// const Container = Layout.Header;

// const Content = styled(VContent)`
//     display: flex;
//     align-items: center;
//     padding-top: 0;
//     padding-bottom: 0;
// `;

const AppName = ({ children }: { children: string }) => {
    if (children.length > 24) {
        console.warn('The contents of `<AppName>` should be fewer then 25 characters');
    }
    return <AppNameText>{children}</AppNameText>;
};

const AppNameText = styled.h3`
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

const AppTagline = styled.h4`
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 8px) {
        display: none;
    }
`;

const LogoGrid = styled.span`
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 8px;

    &:hover ${AppNameText} {
        text-decoration: none;
        display: inline-block;
    }
`;

// Wraps the header logo with an ahref if href is passed in
const ConditionalAnchorWrapper = (props: { href?: string; children: React.ReactElement }) => {
    return props.href ? (
        <DecorationlessAnchor href={props.href} rel="noopener noreferrer">
            {props.children}
        </DecorationlessAnchor>
    ) : (
        props.children
    );
};

const DecorationlessAnchor = styled.a`
    &&:hover {
        text-decoration: none;
    }
    text-decoration: none;
`;

const Logo = (props: {
    label?: React.ReactElement;
    tagline?: React.ReactElement;
    separator?: React.ReactElement;
    href?: string;
    children?: React.ReactElement;
    className?: string;
}) => {
    return (
        <ConditionalAnchorWrapper href={props.href}>
            <LogoGrid className={props.className}>
                {props.children}
                {props.label}
                {props.label && props.tagline ? (
                    props.separator ? (
                        props.separator
                    ) : (
                        <AppTagline>&mdash;</AppTagline>
                    )
                ) : null}
                {props.tagline}
            </LogoGrid>
        </ConditionalAnchorWrapper>
    );
};

interface ColumnsProps {
    columns?: string;
}

const Columns = styled.div<ColumnsProps>`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    width: 100%;
    align-items: center;
    padding: 12px 0;
`;

const MenuColumn = styled.div`
    &&&& {
        justify-self: right;
        line-height: 77px;
        a:hover {
            text-decoration: none;
        }
        ul {
            margin: -12px 0;
        }
    }
`;

const StyledAppBar = styled(AppBar)`
    background-color: white;
    color: ${varnishColor.N9.toString()};
    size: 22pt;
`;

interface HeaderProps {
    alwaysVisible?: boolean;
    children: React.ReactNode | React.ReactNodeArray;
}

interface ScrollProps {
    children: React.ReactElement;
}

function HideOnScroll(props: ScrollProps) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Collapse appear={false} unmountOnExit in={!trigger}>
            {children}
        </Collapse>
    );
}

function HeaderComponent({ alwaysVisible, children }: HeaderProps) {
    return (
        <StyledAppBar position={"sticky"}>
            {alwaysVisible ? <AI2Banner /> :
                <HideOnScroll>
                    <div>
                        <AI2Banner />
                    </div>
                </HideOnScroll>
            }

            <Toolbar>
                <div>{children}</div>
            </Toolbar>
        </StyledAppBar>
    );
}

/**
 * Merge in the components that are tightly coupled to the <Header>,
 * so that they can be used like:
 *  <Header>
 *      <Header.Columns>
 *          ...
 *      </Header.Columns>
 *  </Header>
 */
export const Header = Object.assign(HeaderComponent, {
    AI2Banner,
    AppName,
    AppTagline,
    Columns,
    // Content,
    // Container,
    Logo,
    MenuColumn,
});
