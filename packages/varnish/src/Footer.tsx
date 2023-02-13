import * as React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import { Layout } from 'antd';

// import { palette } from '../theme/palette';
// import { Color } from '../theme/colors';
// import { LinkCSS } from './LinkCSS';
// import { LayoutVariant, VarnishContext } from './VarnishContext';

export type FooterVariant = 'default' | 'dark';

interface Props {
    variant?: FooterVariant;
    // children?: React.ReactNode | React.ReactNodeArray;
    // /* If true, the background of the parent "page" (the body and html elements)
    //    is adjusted to match that of the footer. */
    // setPageBackground?: boolean;
    // layout?: LayoutVariant;
    // backgroundColor?: Color;
    // className?: string;
}

export class Footer extends React.PureComponent<Props> {
    // static defaultProps = {
    //     setPageBackground: true,
    // };

    // getBackgroundColor = (bgcolor?: Color, contrast?: boolean) => {
    //     if (bgcolor) {
    //         return bgcolor;
    //     }
    //     return contrast ? palette.background.dark : palette.common.white;
    // };

    render() {
        return ( <span>
            <a href="https://allenai.org">
                © The Allen Institute for Artificial Intelligence
            </a>{' '}
            - All Rights Reserved |{' '}
            <a href="https://allenai.org/privacy-policy">Privacy Policy</a> |{' '}
            <a href="https://allenai.org/terms">Terms of Use</a> |{' '}
            <a href="https://allenai.org/business-code-of-conduct">
                Business Code of Conduct
            </a>
        </span>)
    }

    // render() {
    //     const contrast = this.props.variant === 'dark';
    //     const bgcolor = this.getBackgroundColor(this.props.backgroundColor, contrast);
    //     return (
    //         <VarnishContext.Consumer>
    //             {({ layout }) => (
    //                 <StyledFooter
    //                     contrast={contrast}
    //                     layout={layout}
    //                     bgcolor={bgcolor}
    //                     className={this.props.className}>
    //                     {this.props.setPageBackground ? (
    //                         <WithPageBackground bgcolor={bgcolor} />
    //                     ) : null}
    //                     {this.props.children ? (
    //                         this.props.children
    //                     ) : (
    //                         <span>
    //                             <a href="https://allenai.org">
    //                                 © The Allen Institute for Artificial Intelligence
    //                             </a>{' '}
    //                             - All Rights Reserved |{' '}
    //                             <a href="https://allenai.org/privacy-policy">Privacy Policy</a> |{' '}
    //                             <a href="https://allenai.org/terms">Terms of Use</a> |{' '}
    //                             <a href="https://allenai.org/business-code-of-conduct">
    //                                 Business Code of Conduct
    //                             </a>
    //                         </span>
    //                     )}
    //                 </StyledFooter>
    //             )}
    //         </VarnishContext.Consumer>
    //     );
    // }
}

// const WithPageBackground = createGlobalStyle<{ bgcolor: Color }>`
//     html, body {
//         background: ${({ bgcolor }) => bgcolor.hex};
//     }
// `;

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const StyledFooter = styled(({ contrast, ...rest }) => <Layout.Footer {...rest} />)<{
//     contrast: boolean;
//     bgcolor: Color;
//     layout?: LayoutVariant;
// }>`
//     && {
//         background: ${({ bgcolor }) => bgcolor.hex};
//         color: ${({ theme, contrast }) =>
//             contrast
//                 ? theme.palette.text.contrast.toString()
//                 : theme.palette.text.primary.toString()};
//         text-align: ${({ layout }) => (layout !== 'left-aligned' ? 'center' : null)};
//         a[href] {
//             ${({ contrast }) => (contrast ? LinkCSS.contrast() : null)};
//         }
//     }
// `;
