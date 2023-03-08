---
title: Varnish Colors
githubLabel: 'varnish: colors'
---

# Colors

<p class="description">Official AI2 Colors.</p>

To ensure your site looks polished and consistent with AI2's broader brand, try to stick using the colors
expressed here.

You can refer to these colors in two ways. Either explicitly via a reference like `theme.color2.N5`, or via
a semantic name attached to the `palette` API, i.e. `theme.palette.primary.main`. The latter is preferred, as
it means your UI will be updated if AI2's broader brand guidelines and change what the `primary` cluster
is.

## Color2

AI2 colors have changed.
We are moving from `color` with 10 values per color to `color2` with 5 values per color.
In general, you should use `color2`. Just divide your color value by 2 (round up).
e.g. `color.B6` -> `color2.B3`, `color.R9` -> `color2.R5`.

## Examples

### Direct Usage

You can use a Varnish color via the theme.
eg: `theme.color2.B3`

{{"demo": "DefaultDemo.js", "bg": false, "defaultCodeOpen":false}}

### Palette Usage

You can also access common Varnish colors via the MUI theme palette.

eg: `theme.palette.error.light`

{{"demo": "PaletteDemo.js", "bg": false, "defaultCodeOpen":false}}

### Text Contrast

Each color defined by Varnish has a `useContrastText` boolean attached to it. If `true`, and the
color is used as the `background` of an element, we suggest inverting the text color for readability.

{{"demo": "ContrastDemo.js", "bg": false, "defaultCodeOpen":false}}

## Main Colors

{{"demo": "PrimaryColorValues.js", "bg": false, "hideToolbar": true}}

## Extended Colors

{{"demo": "ExtendedColorValues.js", "bg": false, "hideToolbar": true}}

## Charting Colors

When designing charts on a `light` background, use the following colors for data series.

{{"demo": "LightCategoricalColorValues.js", "bg": false, "hideToolbar": true}}

When designing charts on a `dark` background, use the following colors for data series.

{{"demo": "DarkCategoricalColorValues.js", "bg": false, "hideToolbar": true}}

## Color API

| Name            | Type                                         | Default | Description                                |
| :-------------- | :------------------------------------------- | :------ | :----------------------------------------- |
| useContrastText | boolean                                      | false   | True if you should use contrast text color |
| displayName     | string                                       |         | Name of color                              |
| hex             | string                                       |         | Hex value of color                         |
| rgba            | {r: number, g: number, b: number, a: number} |         | RGBA object of color                       |
