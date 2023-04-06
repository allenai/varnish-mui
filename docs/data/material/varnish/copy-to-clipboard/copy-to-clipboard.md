---
title: Copy To Clipboard
githubLabel: 'varnish: copy-to-clipboard'
---

# Copy to Clipboard

<p class="description">A component to utilize when creating a simple visual way for users to copy contents to their clipboard.</p>

## Examples

### Basic Text Copy

{{"demo": "BasicDemo.js", "defaultCodeOpen": false}}

### API

| Property         | Type       | Description                                                                               |
| :--------------- | ---------- | :---------------------------------------------------------------------------------------- |
| text             | string     | Value to be copied                                                                        |
| autoHideDuration | number     | Duration after which to hide                                                              |
| buttonContent    | React Node | Contents of the button - recommended is @mui/icons-material/ContentCopy                   |
| children         | React Node | Elements encompassed in the button (this is the default copy value if text not specified) |