import * as React from 'react';
import styled from 'styled-components';
import { VarnishApp, Color } from '@allenai/varnish';

export default function Demo() {
    const extendedTheme = {
        color: {
            Freeze: new Color('Mr. Freeze', '#bbccff', false),
        },
    };

    const CoolH1 = styled.h1`
        color: ${({theme})=>theme.color.Freeze};
    `;

return (
    <VarnishApp theme={extendedTheme}>
        <CoolH1>🥶 Brrrr....</CoolH1>
    </VarnishApp>
);
}
