---
title: Varnish Colors
githubLabel: 'varnish: colors'
---

# Colors

<p class="description">Official AI2 Colors.</p>

What colors should you use on your site? You could use any of these colors, eg. `theme.color.N9`.
But if you are styling something that exists semantically in the theme.palette,
we suggest using the palette, eg. `theme.palette.primary.main`. This has 2 advantages; 1) the code
is more readable, 2) AI2 can change the palette colors without altering dozens of places in every
code base.

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
color is used as the `background` of an element, we suggest setting the text color to
white for readability.

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
