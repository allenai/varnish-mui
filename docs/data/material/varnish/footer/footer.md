---
title: AI2 Varnish Footer
githubLabel: 'varnish: footer'
---

# Footer

<p class="description">Official AI2 Footer.</p>

This component renders a document footer that contains a copyright statement and links to AI2's
Privacy Policy and Terms of Use. This component must be used on all pages of your application.

## When To Use

You should put this towards the end of the page, as that's where this information is usually
expected. It must be present on every page of your application.

## Examples

### Default

The Footer provides sensible defaults and can be used out of the box without any changes.

{{"demo": "FooterDemo.js", "defaultCodeOpen": false}}

### Dark Variant

Dark Variant of the Footer.

{{"demo": "FooterDarkDemo.js", "defaultCodeOpen": false}}

### Custom Footer

Footer with custom content.

{{"demo": "FooterCustomDemo.js", "defaultCodeOpen": false}}

### API

| Property        | Type                | Default   | Description                          |
| :-------------- | ------------------- | :-------- | :----------------------------------- |
| variant         | 'default' \| 'dark' | 'default' | Used contrast text color when 'dark. |
| backgroundColor | string?             | undefined | Background color of footer.          |
