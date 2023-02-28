import { Header } from '@allenai/varnish/header';
import * as React from 'react';
// import {color} from '@allenai/varnish'
// import styled from 'styled-components';

// TODO: Update with Custom DEMO

export default function Demo() {
    // const Tagline = {
    //     Container: styled.span`
    //         display: flex;
    //         align-items: center;
    //         gap: 1ch;
    //     `,
    //     Text: styled.em`
    //         color: ${({ theme }) => theme.palette.text.contrast.toString()};
    //         font-size: ${({ theme }) => theme.typography.textStyles.micro.fontSize};
    //     `,
    // };


  return (
    <div style={{ width: '100%' }}>   
        <Header.AI2Banner />
    </div>
  );
}

/**
 * 
 * 
 * 


const MyCustomHeader = ({ children }) => {
    const [sticky, banner, topOffset] = useSmartAI2Banner();

    return (
        <Header.Sticky ref={sticky} style={{ top: `${topOffset}px` }}>
            <Header.Container>
                <Header.AI2Banner ref={this.banner}>
                    <Tagline.Container>
                        <Tagline.Text>A service of</Tagline.Text>
                        <logos.AI2Logo size="micro" color="white" />
                    </Tagline.Container>
                </Header.AI2Banner>
                <Header.Content>{children}</Header.Content>
            </Header.Container>
        </Header.Sticky>
    );
};

render(
    <MyCustomHeader>
        <Header.Columns columns="auto">
            <logos.AI2Logo />
        </Header.Columns>
    </MyCustomHeader>
);
 */