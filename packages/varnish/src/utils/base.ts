import { TypographyStyle, Variant } from '@mui/material/styles/createTypography';
import { Theme } from '@mui/material/styles';

export type Dictionary<T> = { [id: string]: T };

export type Indexable<T> = { [K in keyof T & string]: T[K] };

export const pxToRem = (px: number, base: number = 16) => {
  return `${px / base}rem`;
};

export function dictionaryToArray<T>(dict: Dictionary<T>) {
  return Object.keys(dict).map((key) => dict[key]);
}

type IndexableTypography = Indexable<Record<Variant, TypographyStyle>>;
// Used to convert style object to css for typographic elements like h1...h6
export const getTypographyStyle = (
  theme: Omit<Theme, 'components'>,
  key: Variant,
  keyOverride?: string,
) => {
  return `
    ${keyOverride || key} {
      color: ${(theme.typography as IndexableTypography)[key].color};
      font-family: ${(theme.typography as IndexableTypography)[key].fontFamily};
      font-weight:  ${(theme.typography as IndexableTypography)[key].fontWeight};
      font-size:  ${(theme.typography as IndexableTypography)[key].fontSize};
      line-height:  ${(theme.typography as IndexableTypography)[key].lineHeight};
      letter-spacing:  ${(theme.typography as IndexableTypography)[key].letterSpacing};
    }
  `;
};
