export type Dictionary<T> = { [id: string]: T };

export type Indexable<T> = { [K in keyof T & string]: T[K] };

export function pxToRem(px: number, base: number = 16) {
  return `${px / base}rem`;
}

export function dictionaryToArray<T>(dict: Dictionary<T>) {
  return Object.keys(dict).map((key) => dict[key]);
}
