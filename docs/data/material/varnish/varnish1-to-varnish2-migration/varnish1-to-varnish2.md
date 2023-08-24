---
title: varnish1-to-varnish2
githubLabel: 'varnish: varnish1-to-varnish2'
---

# Varnish1 to Varnish2

<p class="description">Varnish1 (Deprecated) Concepts in Varnish2 (Material UI Varnish)</p>

This is documentation for several Varnish1 concepts that we have not mapped exactly as Varnish components in Varnish2, as there are different ways of doing them. This guide will help you move from the old "Varnish1" of doing something, such as breakpoints or shadows, to the new "Varnish2" way of enabling that pattern.

## Breakpoints

Breakpoints in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/breakpoints

Breakpoints in Varnish (MUI): https://varnish.allenai.org/material-ui/customization/breakpoints/

## Link_CSS

Styled links in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/link_css

#### Styled links in Varnish(MUI)

In the new Varnish, you can use a MUI `<Link>` component with whichever style variant you want applied directly to the link.

{{"demo": "StyledLinkExample.js", "defaultCodeOpen": false}}

## Shadows

Shadows in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/shadows

Shadows in Varnish (MUI): We are utilizing the Material UI System Shadows API: https://mui.com/system/shadows/

## Shape

Shape in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/shape

Shape in Varnish (MUI): Shape continues to be a variable in theme in Varnish MUI as well: https://varnish.allenai.org/material-ui/varnish/varnish-theme/

#### Usage of Shape in Varnish MUI

{{"demo": "ShapeExample.js", "defaultCodeOpen": false}}

## Spacing

Spacing in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/spacing

Spacing in Varnish (MUI): https://varnish.allenai.org/material-ui/customization/spacing/

## Table Extensions

Table Extensions in Varnish Deprecated: https://varnish-deprecated.apps.allenai.org/components/table_extensions

Tables in Varnish (MUI): https://varnish.allenai.org/material-ui/react-table/

Varnish MUI does not provide a custom filtering API for tables; however we encourage you to use various Material UI tools to work with MUI tables, such as the Table Sort Label API for column sorting (https://varnish.allenai.org/material-ui/api/table-sort-label/).

## Text Styles

Text Styles in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/text_styles

Text Styles in Varnish (MUI): We have a typography variable in theme in Varnish MUI to style text: https://varnish.allenai.org/material-ui/varnish/varnish-theme/

More information about the Typography pattern in MUI can be found here: https://varnish.allenai.org/material-ui/customization/typography/

#### Usage of Typography in Varnish MUI

{{"demo": "TypographyExample.js", "defaultCodeOpen": false}}

## Transitions

Transitions in Varnish-Deprecated: https://varnish-deprecated.apps.allenai.org/components/transitions

Transitions in Varnish (MUI): https://varnish.allenai.org/material-ui/customization/transitions/

## Nivo Charts

We still suggest using [Nivo Charts](https://nivo.rocks/).
However, there is currently no Varnish2 theme. So the colors may be off or need to be hand tuned.
