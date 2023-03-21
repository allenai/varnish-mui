import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import styled from 'styled-components';
import { AI2Banner } from './AI2Banner';
import { pxToRem } from '../../utils/base';
import { Content as VContent } from '../Content';

// TODO: Any theming constants (font-size of  headings, box shadow coloring, z-index) needs to be updated

/* eslint-disable no-nested-ternary */

const AppNameText = styled.h3`
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${pxToRem(30)};

  @media (max-width: 480px) {
    font-size: ${pxToRem(24)};
  }
`;

function AppName({ children }: { children: string }) {
  if (children.length > 24) {
    console.warn('The contents of `<AppName>` should be fewer then 25 characters');
  }
  return <AppNameText>{children}</AppNameText>;
}

const AppTagline = styled.h4`
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${pxToRem(24)};

  @media (max-width: 480px) {
    display: none;
  }
`;

const LogoGrid = styled.span`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};

  &:hover ${AppNameText} {
    text-decoration: none;
    display: inline-block;
  }
`;

const DecorationlessAnchor = styled(Link)`
  &&:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
  }
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Content = styled(VContent)`
  padding-top: 0;
  padding-bottom: 0;
`;

// Wraps the header logo with an ahref if href is passed in
function ConditionalAnchorWrapper(props: { href?: string; children: React.ReactElement }) {
  return props.href ? (
    <DecorationlessAnchor href={props.href} rel="noopener noreferrer">
      {props.children}
    </DecorationlessAnchor>
  ) : (
    props.children
  );
}

function Logo(props: {
  label?: React.ReactElement;
  tagline?: React.ReactElement;
  separator?: React.ReactElement;
  href?: string;
  children?: React.ReactElement;
  className?: string;
}) {
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
}

interface ColumnsProps {
  columns?: string;
}

const StyledAppBar = styled(AppBar)`
  &&&& {
    background-color: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.text.primary};
    size: 22pt;
    top: 0;
    width: 100%;
    box-shadow: 0px ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(2)}
      rgba(10, 41, 57, 0.08);
    transition: top 200ms ease-in-out;
  }
`;

interface ScrollProps {
  children: React.ReactElement;
  triggerTarget?: HTMLDivElement;
}

// This is the function that enables 'smart scroll'. It hides any component(s) passed in via the children props
// in a Collapse Transition component, and on scroll of the trigger target (default is window), the children will
// get hidden.
function HideOnScroll(props: ScrollProps) {
  const { children, triggerTarget } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const trigger = triggerTarget ? useScrollTrigger({ target: triggerTarget }) : useScrollTrigger();

  return (
    <Collapse appear={false} unmountOnExit in={!trigger}>
      {children}
    </Collapse>
  );
}

interface HeaderProps {
  children?: React.ReactNode | React.ReactNodeArray;
  bannerAlwaysVisible?: boolean;
  customBanner?: React.ReactNode;

  // Note: Only modify this if you want the smart AI2 banner to be hidden on scroll of
  // a container OTHER than the main window
  scrollTriggerTarget?: HTMLDivElement;
}

function HeaderComponent({
  children,
  customBanner,
  bannerAlwaysVisible,
  scrollTriggerTarget,
}: HeaderProps) {
  const ai2Banner = customBanner || <AI2Banner />;

  return (
    <StyledAppBar position={'sticky'}>
      {bannerAlwaysVisible ? (
        <div>{ai2Banner}</div>
      ) : (
        <HideOnScroll triggerTarget={scrollTriggerTarget}>
          <div>{ai2Banner}</div>
        </HideOnScroll>
      )}
      {children ? (
        <Toolbar>
          <Content>{children}</Content>
        </Toolbar>
      ) : null}
    </StyledAppBar>
  );
}

const Columns = styled.div<ColumnsProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-column-gap: ${({ theme }) => theme.spacing(2)};
  grid-row-gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1.5)} 0;
`;

const MenuColumn = styled.div`
  &&&& {
    justify-self: right;
    line-height: 77px;
    a:hover {
      text-decoration: none;
    }
    ul {
      margin: -${({ theme }) => theme.spacing(1.5)} 0;
    }
  }
`;

/**
 * Merge in the components that are tightly coupled to the <Header>,
 * so that they can be used like:
 *  <Header>
 *      <Header.Columns>
 *          ...
 *      </Header.Columns>
 *  </Header>
 */
// eslint-disable-next-line import/prefer-default-export
export const Header = Object.assign(HeaderComponent, {
  AI2Banner,
  AppName,
  AppTagline,
  Columns,
  Logo,
  MenuColumn,
});
