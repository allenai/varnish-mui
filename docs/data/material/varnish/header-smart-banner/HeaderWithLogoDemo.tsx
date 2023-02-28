import * as React from 'react';
import { Header } from '@allenai/varnish/header';
import { logos } from '@allenai/varnish/logos';

export default function Demo() {
    const getDivs = () => {
    var divs = [];
    for (var i = 0; i < 50; i++) {
        divs.push(<div key={i}>Content!</div>);
    }
    return divs;
}

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
            <Header alwaysVisible={false}>
                    <Header.Logo
                        href="http://allenai.org"
                        label={<Header.AppName>Title</Header.AppName>}>
                        <logos.AI2Logo includeText={false} />
                    </Header.Logo>
            </Header>
            {getDivs()}
        </div>
    );
}