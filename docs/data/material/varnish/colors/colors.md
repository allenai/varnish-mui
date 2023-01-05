---
title: Varnish Colors
githubLabel: 'varnish: colors'
---

# Colors

<p class="description">Official AI2 Colors.</p>

To ensure your site looks polished and consistent with AI2's broader brand, try to stick using the colors
expressed here.

You can refer to these colors in two ones. Either explicitly via a reference like `theme.color.N9`, or via
a semantic name attached to the `palette` API: `theme.palette.primary.main`. The latter is preferred, as
it means your UI will be updated if AI2's broader brand guidelines and change what the `primary` cluster
is.


## Examples

### Direct Usage

You can use a Varnish color via the theme.
eg: `theme.color.B6`

{{"demo": "DefaultDemo.tsx", "bg": true}}

### Palette Usage

You can also access common Varnish colors via the MUI theme palette.

eg: `theme.palette.primary.main`

{{"demo": "PaletteDemo.tsx", "bg": true}}

### Text Contrast

Each color defined by Varnish has a `useContrastText` boolean attached to it. If `true`, and the
color is used as the `background` of an element, we suggest inverting the text color for readability.

{{"demo": "ContrastDemo.tsx", "bg": true}}

## Primary Colors

{{"demo": "PrimaryColorValues.tsx", "bg": true, "hideToolbar": true}}

## Extended Colors

{{"demo": "ExtendedColorValues.tsx", "bg": true, "hideToolbar": true}}

## Charting Colors

{{"demo": "LightCategoricalColorValues.tsx", "bg": true, "hideToolbar": true}}

{{"demo": "DarkCategoricalColorValues.tsx", "bg": true, "hideToolbar": true}}

## Color API

| Name            | Type                              | Default | Description                                |
| :-------------- | :-------------------------------- | :------ | :----------------------------------------- |
| useContrastText | boolean                           | false   | True if you should use contrast text color |
| displayName     | string                            |         | Name of color                              |
| hex             | string                            |         | Hex value of color                         |
| rgb             | {r: number, g: number, b: number} |         | RGB object of color                        |
