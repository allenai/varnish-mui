---
  title: AI2 Logos
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

#### You can change the size of the logo to be one of three values: _sm_, _md_ or _lg_.

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

| Property    | Type                 | Default   | Description                |
| :---------- | :------------------- | :-------- | :------------------------- |
| size        | 'sm' \| 'md' \| 'lg' | 'md'      | sets size of logo          |
| color       | 'default' \| 'white' | 'default' | sets color of logo         |
| includeText | boolean              | true      | display the full org name? |

### AI2 Project Logos

| Property | Type   | Default | Description      |
| :------- | :----- | :------ | :--------------- |
| width    | number | 32      | sets icon width  |
| height   | number | 32      | sets icon height |
