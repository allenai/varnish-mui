import * as React from 'react';
import styled from 'styled-components';

import { AI2Mark } from './AI2Mark';
import { AI2MarkText } from './AI2MarkText';
import { color2, Color } from '../../theme/colors';
import { Indexable, Dictionary } from '../../utils/base';

type ColorVariants = 'default' | 'white';
export type LogoSize = 'sm' | 'md' | 'lg';

interface DimData {
  height: number;
  width: {
    mark: number;
    gap: number;
    text: number;
  };
}

const dimsBySize: Indexable<Dictionary<DimData>> = {
  sm: {
    height: 16,
    width: {
      mark: 30,
      gap: 9,
      text: 138,
    },
  },
  md: {
    height: 30,
    width: {
      mark: 64,
      text: 189,
      gap: 12,
    },
  },
  lg: {
    height: 37,
    width: {
      mark: 79,
      gap: 14,
      text: 233,
    },
  },
};

const LogoGrid = styled.span<{ gap: number }>`
  display: inline-grid;
  grid-template-columns: repeat(2, min-content);
  gap: ${({ gap }) => gap}px;
`;

export interface AI2LogoProps {
  color?: ColorVariants;
  includeText?: boolean;
  size?: LogoSize;
  className?: string;
}

/**
 * Component that renders the AI2 Logo.
 */
export function AI2Logo(p: AI2LogoProps) {
  const props = { size: 'md', color: 'default', includeText: true, ...p };
  const dims = dimsBySize[props.size];
  const [gradients, color]: [false | undefined, Color | undefined] =
    props.color === 'white' ? [false, color2.N1] : [undefined, undefined];
  if (!props.includeText) {
    return (
      <AI2Mark
        className={props.className}
        width={dims.width.mark}
        height={dims.height}
        gradients={gradients}
        color={color}
      />
    );
  }

  // When the logo is small we resize the viewbox of the text so it's more legible.
  const vw = props.size === 'sm' ? '74 6 190 18' : undefined;
  return (
    <LogoGrid gap={dims.width.gap} className={props.className}>
      <AI2Mark width={dims.width.mark} height={dims.height} gradients={gradients} color={color} />
      <AI2MarkText width={dims.width.text} height={dims.height} color={color} viewBox={vw} />
    </LogoGrid>
  );
}
