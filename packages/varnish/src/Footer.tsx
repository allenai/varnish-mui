import { Link } from '@mui/material';
import * as React from 'react';

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

export class Footer extends React.PureComponent<Props> {

    render() {
        const contrast = this.props.variant === 'dark';
        // TODO: Update Contrast color palettes
        const textColor = contrast ? varnishColor.white.toString() : varnishColor.black.toString();

        // TODO: Add Link Theming and Typography (following 2 lines will be refactored after this TODO)
        const defaultLinkColor = varnishColor.B6.toString();
        const contrastLinkColor = varnishColor.B3.toString();

        const linkColor = contrast ? contrastLinkColor : defaultLinkColor;
        const background = contrast ? varnishColor.B10.toString() : varnishColor.white.toString();

        // TODO: Make custom styles for elements that have standardized padding
        return (
            <footer className={this.props.className} style={{ padding: '24px', color: textColor, backgroundColor: this.props.backgroundColor ? this.props.backgroundColor.toString() : background }}>
                {this.props.children ? (
                    this.props.children
                ) : (<span color={textColor}>
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
            </footer>
        )
    }
}
