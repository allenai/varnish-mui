import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Color, CopyToClipboardButton } from '@allenai/varnish';

export type ColorGroupDict = { [k: string]: Color[] };

export function ColorValues({
  colorGroupDict,
  themeProp,
}: {
  colorGroupDict: ColorGroupDict;
  themeProp: string;
}) {
  return (
    <React.Fragment>
      {Object.entries(colorGroupDict).map(
        ([colorGroupKey, colorGroup]: [string, Color[]]) => {
          return (
            <ColorGroup
              key={colorGroupKey}
              colors={colorGroup}
              group={colorGroupKey}
              themeProp={themeProp}
            />
          );
        },
      )}
    </React.Fragment>
  );
}

interface ColorGroupProps {
  colors: Color[];
  group: string;
  themeProp: string;
}

function ColorGroup(props: ColorGroupProps) {
  return (
    <React.Fragment>
      <ExtendedHeadRow>
        <Label>{props.group}</Label>
      </ExtendedHeadRow>
      <Namespace>
        <Typography variant="caption">{`theme.${props.themeProp}.`}</Typography>
      </Namespace>
      <Line />
      {props.colors.map((col: Color) => {
        return col ? (
          <React.Fragment key={col.displayName}>
            <ColorRow color={col} themeProp={props.themeProp} />
            <Line />
          </React.Fragment>
        ) : null;
      })}
    </React.Fragment>
  );
}

interface ColorRowProps {
  color: Color;
  themeProp: string;
}

function ColorRow(props: ColorRowProps) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <ColorBoxWrapper>
        <ColorBox
          color={props.color.hex}
          borderColor={
            props.color.useContrastText
              ? theme.palette.common.white
              : theme.palette.text.primary
          }
        >
          <ColorText
            color={
              props.color.useContrastText
                ? theme.palette.common.white
                : theme.palette.text.primary
            }
          >
            A
          </ColorText>
        </ColorBox>
      </ColorBoxWrapper>
      <ColorName>
        <CopyToClipboardButton
          text={`theme.${props.themeProp}.${props.color.displayName}`}
        >
          {props.color.displayName}
        </CopyToClipboardButton>
      </ColorName>
      <ColorHex>
        <CopyToClipboardButton>{props.color.hex}</CopyToClipboardButton>
      </ColorHex>
      {props.color.rgb ? (
        <ColorRgb>
          <CopyToClipboardButton
            text={`rgb(${props.color.rgb.r}, ${props.color.rgb.g}, ${props.color.rgb.b})`}
          >
            <span>
              x{props.color.rgb.r}, {props.color.rgb.g}, {props.color.rgb.b}
            </span>
          </CopyToClipboardButton>
        </ColorRgb>
      ) : null}
    </React.Fragment>
  );
}

// TODO:  implement the <Columns count={x} /> component as seen in the Incubator project
export const ExtendedGrid = styled('div')`
  display: grid;
  grid-template-columns: max-content repeat(3, auto);
  align-items: center;
  width: 100%;
  grid-template-rows:
    75px repeat(22, auto)
    75px repeat(22, auto)
    75px repeat(22, auto)
    75px repeat(22, auto)
    75px repeat(22, auto)
    75px repeat(22, auto)
    75px repeat(22, auto)
    75px repeat(22, auto);
  margin-top: ${({ theme }) => theme.spacing(0.5).toString()};
  margin-bottom: ${({ theme }) => theme.spacing(3).toString()};
`;

export const ChartingGrid = styled(ExtendedGrid)`
  grid-template-rows: 75px repeat(9, auto);
`;

const ExtendedHeadRow = styled('div')`
  grid-column: 1 / span 4;
  align-self: end;
  padding: ${({ theme }) => `${theme.spacing(2).toString()} 0`};
`;

const Label = styled(Typography)`
  text-transform: capitalize;
`;
Label.defaultProps = {
  variant: 'h6',
};

const Col = styled('div')`
  padding: ${({ theme }) => `${theme.spacing(1.5).toString()} 0`};
`;

const ColorBox = styled('div')<{ color: string; borderColor: string }>`
  display: flex;
  background: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}`};
  border: ${(props) => `1px solid ${props.borderColor}`};
`;

const ColorText = styled('div')`
  align-self: center;
  width: 100%;
  text-align: center;
  color: ${(props) => props.color};
`;

const ColorBoxWrapper = styled(Col)`
  padding: 7px;
  grid-column: 1;
`;

const ColorName = styled(Col)`
  padding-left: ${({ theme }) => theme.spacing(0.5).toString()};
  grid-column: 2;
`;

const ColorHex = styled(Col)`
  grid-column: 3;
`;

const ColorRgb = styled(Col)`
  grid-column: 4;
`;

const Namespace = styled('div')`
  grid-column: 1 / span 4;
`;

const Line = styled('div')`
  grid-column: 1 / -1;
  height: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  width: 100%;
`;
