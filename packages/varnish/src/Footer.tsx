import { css, Link } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

import { Color, color as varnishColor } from './colors';

export type LayoutVariant = 'left-aligned' | 'center-aligned';

export type FooterVariant = 'default' | 'dark';

interface Props {
    variant?: FooterVariant;
    children?: React.ReactNode | React.ReactNode[];
    layout?: LayoutVariant; // TODO: Add layout understanding to new footer (Investigate Grid?)
    backgroundColor?: Color;
    className?: string;
}

export const Footer = (props: Props) => {
    const contrast = props.variant === 'dark';
    // TODO: Update Contrast color palettes
    const textColor = contrast ? varnishColor.white.toString() : varnishColor.black.toString();

    // TODO: Add Link Theming and Typography (following 2 lines will be refactored after this TODO)
    const defaultLinkColor = varnishColor.B6.toString();
    const contrastLinkColor = varnishColor.B3.toString();

    const linkColor = contrast ? contrastLinkColor : defaultLinkColor;
    const background = props.backgroundColor ? props.backgroundColor.toString() : (contrast ? varnishColor.B10.toString() : varnishColor.white.toString());

    // TODO: Make custom styles for elements that have standardized padding across AI2
    return (
        <StyledFooter className={props.className} textColor={textColor} background={background}>
            {props.children ? (
                props.children
            ) : (<span>
                <Link color={linkColor} href="https://allenai.org">
                    © The Allen Institute for Artificial Intelligence
                </Link>{' '}
                - All Rights Reserved |{' '}
                <Link color={linkColor} href="https://allenai.org/privacy-policy">Privacy Policy</Link> |{' '}
                <Link color={linkColor} href="https://allenai.org/terms">Terms of Use</Link> |{' '}
                <Link color={linkColor} href="https://allenai.org/business-code-of-conduct">
                    Business Code of Conduct
                </Link>
            </span>)}
        </StyledFooter>
    )
}

const StyledFooter = styled(({ textColor, background, ...rest }) => <footer {...rest} />)<{
    textColor: string;
    background: string;
}>`
  padding: 24px;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
`;