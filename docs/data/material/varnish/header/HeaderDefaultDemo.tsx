import * as React from 'react';
import { Header } from '@allenai/varnish/header';

export default function Demo() {
    return (
        <div style={{ width: '100%' }}>
            <Header alwaysVisible={true}>
                <Header.Logo label={<Header.AppName>Title</Header.AppName>} />
            </Header>
        </div>
    );
}