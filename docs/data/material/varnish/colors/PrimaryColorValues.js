/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { color2, CopyToClipboardButton } from '@allenai/varnish';

function PrimaryColor(props) {
  return (
    <PrimaryColorGrid>
      <PrimaryColorBox color={props.color.hex} />
      <PrimaryColorName>
        <CopyToClipboardButton text={`theme.color2.${props.color.displayName}`}>
          {props.color.displayName}{' '}
        </CopyToClipboardButton>
      </PrimaryColorName>
      <PrimaryColorHex>
        <CopyToClipboardButton>{props.color.hex}</CopyToClipboardButton>
      </PrimaryColorHex>
    </PrimaryColorGrid>
  );
}

PrimaryColor.propTypes = {
  color: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgba: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      r: PropTypes.number.isRequired,
      toString: PropTypes.func.isRequired,
    }).isRequired,
    toString: PropTypes.func.isRequired,
    useContrastText: PropTypes.bool,
  }).isRequired,
};

export default function PrimaryColorValues() {
  return (
    <div>
      <h3>Primary</h3>
      <PrimaryGrid>
        {[color2.B3, color2.B4, color2.B2].map((c) => (
          <PrimaryColor key={c.displayName} color={c} />
        ))}
      </PrimaryGrid>
      <h3>Secondary</h3>
      <PrimaryGrid>
        {[color2.P3, color2.P4, color2.P2].map((c) => (
          <PrimaryColor key={c.displayName} color={c} />
        ))}
      </PrimaryGrid>
    </div>
  );
}

// TODO:  implement the <Columns count={x} /> component as seen in the Incubator project
const PrimaryGrid = styled('div')(
  ({ theme }) =>
    css`
      display: grid;
      gap: 0 ${theme.spacing(2)};
      align-items: center;
      margin-top: ${theme.spacing(2)};
      margin-bottom: ${theme.spacing(3)};
      grid-template-columns: 1fr 1fr 1fr;

      ${theme.breakpoints.down('md')} {
        grid-template-columns: 1fr 1fr;
      }
      ${theme.breakpoints.down('sm')} {
        grid-template-columns: 1fr;
      }
    `,
);

const PrimaryColorGrid = styled('div')`
  display: grid;
  grid-template-columns: max-content auto auto;
  align-items: center;
  grid-template-rows: repeat(2, max-content);
  margin-bottom: ${({ theme }) => theme.spacing(2).toString()};
`;

const PrimaryColorBox = styled('div')`
  background: ${(props) => props.color};
  width: 100%;
  height: 76px;
  border-radius: ${({ theme }) =>
    `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0`};
  grid-column: 1 / span 3;
`;

const MicroCol = styled(Typography)`
  background: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(1.5).toString()};
`;
MicroCol.defaultProps = {
  variant: 'body2',
};

const PrimaryColorName = styled(MicroCol)`
  grid-column: 1;
  padding-right: 0;
`;

const PrimaryColorHex = styled(MicroCol)`
  white-space: nowrap;
  grid-column: 2;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(0.5)}`};
`;
