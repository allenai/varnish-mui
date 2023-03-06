import * as React from 'react';
import { VarnishApp, Color, Header } from '@allenai/varnish';

export default function Demo() {
    const extendedTheme = {
        color: {
            // replacing B10 with a new color
            B10: new Color('coolBlack', '#18191A', true),
        }
    };

return (
    <VarnishApp  theme={extendedTheme}>
        <Header.AI2Banner />
    </VarnishApp>
);
}
