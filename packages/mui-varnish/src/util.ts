// TODO: this file was pull over directly from varnish.
// We should look it over and make sure it still makes sense.

export type Dictionary<T> = { [id: string]: T };
export type Indexable<T> = { [K in keyof T & string]: T[K] };
