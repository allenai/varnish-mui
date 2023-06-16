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

### Custom Footer with AI2 Privacy and Terms of Use Links

Footer with some custom content and some AI2 proprietary content.

{{"demo": "FooterCustomWithAI2LinksDemo.js", "defaultCodeOpen": false}}

### API

| Property        | Type                | Default   | Description                          |
| :-------------- | ------------------- | :-------- | :----------------------------------- |
| variant         | 'default' \| 'dark' | 'default' | Used contrast text color when 'dark. |
| backgroundColor | string?             | undefined | Background color of footer.          |

### Footer Components

The Footer consists of multiple different links that can each be used individually or together for a custom footer:

| Link Component                | Prop    | Description                                                                                 |
| :---------------------------- | ------- | :------------------------------------------------------------------------------------------ |
| PrivacyLink                   | variant | The AI2 Privacy Policy Link, with variant default or dark depending on footer               |
| TermsOfUseLink                | variant | The AI2 Terms of Use Link, with variant default or dark depending on footer                 |
| BusinessConductLink           | variant | The AI2 Business Code of Conduct Link, with variant default or dark depending on footer     |
| AI2TermsAndConditionsAllLinks | variant | The combination of the AI2 Privacy Policy, Terms of Use, and Business Code of Conduct links |
| AI2CopyrightLink              | variant | The AI2 Copyright Link, with variant default or dark depending on footer                    |

You can separate Footer links if used in a custom footer with a `<FooterLinkSeparator />` component
