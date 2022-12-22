import * as React from 'react';
import { styled, css } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { color, Color, CopyToClipboardButton } from '@allenai/mui-varnish';

interface PrimaryColorProps {
  color: Color;
}

function PrimaryColor(props: PrimaryColorProps) {
  return (
    <PrimaryColorGrid>
      <PrimaryColorBox color={props.color.hex} />
      <PrimaryColorName>
        <CopyToClipboardButton text={`theme.color.${props.color.displayName}`}>
          {props.color.displayName}{' '}
        </CopyToClipboardButton>
      </PrimaryColorName>
      <PrimaryColorHex>
        <CopyToClipboardButton>{props.color.hex}</CopyToClipboardButton>
      </PrimaryColorHex>
    </PrimaryColorGrid>
  );
}

export default function PrimaryColorValues() {
  return (
    <PrimaryGrid>
      {[color.B8, color.B7, color.B6, color.O6].map((c: Color) => (
        <PrimaryColor key={c.displayName} color={c} />
      ))}
    </PrimaryGrid>
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

      ${theme.breakpoints.down('lg')} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      ${theme.breakpoints.down('md')} {
        grid-template-columns: 1fr 1fr;
      }
      ${theme.breakpoints.down('sm')} {
        grid-template-columns: 1fr;
      } ;
    `,
);
/*
  ${theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
  },
  ${theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr;
  },
  ${theme.breakpoints.up('lg')} {
    grid-template-columns: repeat(4, 1fr);
  }
*/

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
