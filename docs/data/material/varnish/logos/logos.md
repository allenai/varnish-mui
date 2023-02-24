---
  title: Varnish AI2 Logos
  githubLabel: 'varnish: logos'
---

# AI2 Logos

<p class="description">AI2 Specific Logos as inline SVG elements.</p>

## When To Use

Whenever you need the official AI2 or project logo.

## Examples

### Basic Usage

{{"demo": "LogosDefaultDemo.js"}}

### Different Sizes
#### You can change the size of the logo to be one of three values: _micro_, _default_ or _large_.

{{"demo": "LogosSizesDemo.js"}}

### Altered Text
#### Depending on the context, you may or may not want to display the full organization name text.

{{"demo": "LogosTextDemo.js"}}

### White Logo
#### If you're using the logo against a dark background, you will want to set the component's `color` value to `white`.

{{"demo": "LogosWhiteDemo.js"}}

### Canonical logos for AI2's projects.

{{"demo": "ProjectsLogosDemo.js"}}

## API

### AI2 Logo

| Property    | Description                | Type                         | Default   |
| ----------- | -------------------------- | ---------------------------- | --------- |
| size        | sets size of logo          | 'micro' \| 'default' \| 'lg' | 'default' |
| color       | sets color of logo         | 'default' \| 'white'         | 'default' |
| includeText | display the full org name? | boolean                      | true      |

### AI2 Project Logos

| Property | Description      | Type   | Default |
| -------- | ---------------- | ------ | ------- |
| width    | sets icon width  | number | 32      |
| height   | sets icon height | number | 32      |
