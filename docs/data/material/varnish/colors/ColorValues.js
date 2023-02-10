import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CopyToClipboardButton } from '@allenai/varnish';

function ColorValues({ colorGroupDict, themeProp }) {
  return (
    <React.Fragment>
      {Object.entries(colorGroupDict).map(([colorGroupKey, colorGroup]) => {
        return (
          <ColorGroup
            key={colorGroupKey}
            colors={colorGroup}
            group={colorGroupKey}
            themeProp={themeProp}
          />
        );
      })}
    </React.Fragment>
  );
}

ColorValues.propTypes = {
  colorGroupDict: PropTypes.object.isRequired,
  themeProp: PropTypes.string.isRequired,
};

export { ColorValues };

function ColorGroup(props) {
  return (
    <React.Fragment>
      <ExtendedHeadRow>
        <Label>{props.group}</Label>
      </ExtendedHeadRow>
      <Namespace>
        <Typography variant="caption">{`theme.${props.themeProp}.`}</Typography>
      </Namespace>
      <Line />
      {props.colors.map((col) => {
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

ColorGroup.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      rgb: PropTypes.shape({
        b: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        r: PropTypes.number.isRequired,
        toString: PropTypes.func.isRequired,
      }).isRequired,
      toString: PropTypes.func.isRequired,
      useContrastText: PropTypes.bool,
    }),
  ).isRequired,
  group: PropTypes.string.isRequired,
  themeProp: PropTypes.string.isRequired,
};

function ColorRow(props) {
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

ColorRow.propTypes = {
  color: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.shape({
      b: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      r: PropTypes.number.isRequired,
      toString: PropTypes.func.isRequired,
    }).isRequired,
    toString: PropTypes.func.isRequired,
    useContrastText: PropTypes.bool,
  }).isRequired,
  themeProp: PropTypes.string.isRequired,
};

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

const ColorBox = styled('div')`
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
