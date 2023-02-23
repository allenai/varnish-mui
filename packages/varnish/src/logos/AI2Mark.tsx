import React from 'react';

import { color as AI2Color, Color } from '../colors';

interface GradientStop {
    offset: number;
    color: string | Color;
}

type Gradient = GradientStop[];

interface GradientDef {
    ALeftUp: Gradient;
    ABar: Gradient;
    IDot: Gradient;
    TwoTail: Gradient;
}

export interface AI2MarkProps {
    width?: string | number;
    height?: string | number;
    gradients?: Partial<GradientDef> | false;
    color?: string | Color;
    className?: string;
}

const defaultGradients: GradientDef = {
    ALeftUp: [
        { offset: 0.177, color: AI2Color.A6 },
        { offset: 0.3061, color: '#06C1F4' },
        { offset: 0.5618, color: '#148BD7' },
        { offset: 0.9012, color: AI2Color.B7 },
    ],
    ABar: [
        { offset: 0.3803, color: AI2Color.A6 },
        { offset: 0.4684, color: '#02CFFD' },
        { offset: 0.5906, color: '#08BDF6' },
        { offset: 0.7327, color: '#129FEB' },
        { offset: 0.8885, color: '#2077DC' },
        { offset: 1, color: '#2B55CF' },
    ],
    IDot: [
        { offset: 0, color: '#FFD215' },
        { offset: 1, color: '#FF9B00' },
    ],
    TwoTail: [
        { offset: 0, color: '#2B55CF' },
        { offset: 1, color: AI2Color.B7 },
    ],
};

// The SVG uses ids to refer to gradients that it defines. If the SVG is rendered multiple times
// on the same page these ids collide. We use a simple integer that we increment everytime we
// render to resolve this.
let lastId = 0;

export const AI2Mark = (props: AI2MarkProps) => {
    const gradients =
        props.gradients !== false
            ? Object.assign({}, defaultGradients, props.gradients || {})
            : false;
    const color = `${props.color || AI2Color.B6}`;

    // Increment by one so the ids are all unique. See line 52.
    const uid = ++lastId;
    return (
        <svg
            viewBox="0 0 78 37"
            width={props.width}
            height={props.height}
            className={props.className}
            role="img">
            <title>AI2</title>
            {gradients ? (
                <defs>
                    <linearGradient
                        id={`ALeftUp${uid}`}
                        gradientUnits="userSpaceOnUse"
                        x1="-0.6847"
                        y1="-13.3939"
                        x2="16.5305"
                        y2="34.9726"
                        gradientTransform="matrix(1 0 0 -1 0 38)">
                        {gradients.ALeftUp.map((s, i) => (
                            <stop key={i} offset={s.offset} stopColor={`${s.color}`} />
                        ))}
                    </linearGradient>
                    <linearGradient
                        id={`ABar${uid}`}
                        gradientUnits="userSpaceOnUse"
                        x1="28.3067"
                        y1="20.8361"
                        x2="-11.2443"
                        y2="-8.0771"
                        gradientTransform="matrix(1 0 0 -1 0 38)">
                        {gradients.ABar.map((s, i) => (
                            <stop key={i} offset={s.offset} stopColor={`${s.color}`} />
                        ))}
                    </linearGradient>
                    <radialGradient
                        id={`IDot${uid}`}
                        cx="44.2862"
                        cy="27.4327"
                        r="9.4283"
                        gradientTransform="matrix(1 0 0 -1 0 38)"
                        gradientUnits="userSpaceOnUse">
                        {gradients.IDot.map((s, i) => (
                            <stop key={i} offset={s.offset} stopColor={`${s.color}`} />
                        ))}
                    </radialGradient>
                    <linearGradient
                        id={`TwoTail${uid}`}
                        gradientUnits="userSpaceOnUse"
                        x1="70.8452"
                        y1="4.4966"
                        x2="59.3005"
                        y2="4.5167"
                        gradientTransform="matrix(1 0 0 -1 0 38)">
                        {gradients.TwoTail.map((s, i) => (
                            <stop key={i} offset={s.offset} stopColor={`${s.color}`} />
                        ))}
                    </linearGradient>
                </defs>
            ) : null}
            <path
                style={{ fill: gradients ? `url(#ALeftUp${uid})` : color }}
                d="M21.3,0.4h-7L0.1,37h6.6c0.7,0,1.3-0.2,1.8-0.6c0.5-0.4,0.8-0.8,1-1.3L17.2,13c0.3-0.6,0.5-1.4,0.8-2.3
                   C18.3,9.9,21.3,0.4,21.3,0.4L21.3,0.4z"
            />
            <path
                style={{ fill: color }}
                d="M40,15.5V37h8.5l0-26c-1.6,0.1-3.2,0.3-4.5,0.4l-0.4,0c-1,0.1-1.9,0.6-2.6,1.4C40.3,13.5,40,14.5,40,15.5
                  L40,15.5z"
            />
            <path
                style={{ fill: gradients ? `url(#ABar${uid})` : color }}
                d="M37.1,12.5c-0.5,0-1,0.1-1.9,0.3C20.5,16,6.9,25.7,0.1,37h7.3c0.8,0,1.7-0.3,2.2-1
                   c8.8-12.7,20.6-19.6,25.9-22.4C36.9,12.9,37,12.6,37.1,12.5L37.1,12.5z"
            />
            <path
                style={{ fill: color }}
                d="M21.6,0.4h-7.4c0,0,1.5,0.5,2.1,1.8l11.4,32.9c0.2,0.5,0.6,1,1,1.3c0.5,0.3,1,0.5,1.8,0.5h6.6L23.4,1.6
                   c-0.1-0.4-0.4-0.7-0.7-0.9C22.4,0.5,22,0.4,21.6,0.4L21.6,0.4z"
            />

            <path
                style={{ fill: gradients ? `url(#IDot${uid})` : color }}
                d="M48.5,11V0.4H40v10.5c0,0.1,0,0.2,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0,0.4,0
                   C43.5,11.4,46.4,11.1,48.5,11z"
            />
            <path
                style={{ fill: color }}
                d="M63.4,30.8l0-0.2l6.9-7.1c1-1,1.9-2,2.8-2.9c0.8-0.9,1.6-1.9,2.3-3c0.6-1,1.2-2.1,1.5-3.3
                   c0.4-1.2,0.6-2.5,0.6-3.7c0-1.6-0.3-3-0.8-4.3c-0.5-1.3-1.3-2.4-2.3-3.4c-1-0.9-2.3-1.7-3.7-2.2C69.1,0.3,67.5,0,65.7,0
                   c-1.6,0-3.2,0.2-4.7,0.7c-1.4,0.4-2.7,1.1-3.9,2c-1.2,0.9-2.1,2.1-2.8,3.4c-0.7,1.3-1.2,2.8-1.5,4.6c1.4-0.1,3.6-0.1,5.3-0.1
                   c1.3,0,2.4-0.7,3-1.8c0,0,0,0,0,0c0.3-0.6,0.8-1,1.3-1.4c0.8-0.6,1.8-0.9,2.9-0.9c1.4,0,2.5,0.4,3.2,1.2c0.7,0.8,1,1.9,1,3.4
                   c0,0.9-0.1,1.7-0.3,2.5c-0.2,0.8-0.6,1.6-1,2.4c-0.5,0.9-1,1.7-1.7,2.4c-0.7,0.9-1.5,1.8-2.4,2.6L53.6,31.4
                   c-0.5,0.4-0.8,0.9-1.1,1.5c-0.2,0.5-0.3,1-0.3,1.6V37h7L63.4,30.8z"
            />
            <path
                style={{ fill: gradients ? `url(#TwoTail${uid})` : color }}
                d="M77.2,30.7c-0.5-0.5-1.1-0.7-2-0.7h-1.5c0,0,0,0,0,0l-5.3,0c0,0-0.1,0-0.1,0c-0.2,0-0.5,0-0.7,0
                  c-0.6,0-1.1,0.1-1.7,0.2c-0.1,0-0.2,0-0.2,0c-0.4,0.1-0.7,0.1-1,0.1c-0.6,0.1-1.2,0.2-1.2,0.2c-1.2,1.3-2.7,2.7-3.5,3.6
                  c-0.5,0.5-0.8,1.2-0.8,1.9v1h18.8v-4.5C77.9,31.7,77.7,31.1,77.2,30.7L77.2,30.7z"
            />
        </svg>
    );
};
