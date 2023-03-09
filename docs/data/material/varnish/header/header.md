---
title: AI2 Varnish Header
githubLabel: 'varnish: header'
---

# Header

<p class="description">Official AI2 Header.</p>

## When To Use

You should put this at the top of the page. It is highly recommended to be present on every page of
your application.

### API

| Property            | Type                                                                       | Default   | Description                                                                                                                                                                                                                          |
| :------------------ | :------------------------------------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bannerAlwaysVisible | boolean                                                                    | false     | Prevents the AI2 banner from disappearing when the page is scrolled                                                                                                                                                                  |
| customBanner        | JSX / TSX Element; if left undefined, the banner is the default AI2 banner | undefined | A Custom AI2 banner that you can inject into the header via this prop                                                                                                                                                                |
| scrollTriggerTarget | HTMLDivElement                                                             | undefined | If you choose to use the AI2 Header with Smart Banner within a div, you can change the scroll target to be the specific div it is in. Note: This should rarely be used, reach out to the team if you find yourself using this often. |

## Sub Components

### Header.Columns API

| Property | Type                            | Default | Description              |
| :------- | :------------------------------ | :------ | :----------------------- |
| columns  | string? (grid-template-columns) | null    | Defines the grid columns |

### Header.Logo

A helper component for placing a logo and `<Header.AppName/>` in the `<Header/>` easier.

```jsx
<Header>
    <Header.Columns columns="auto 1fr">
        <Header.Logo
            label=...>
            <img src={logoWithText} height={'56px'} alt="Varnish" />
        </Header.Logo>
    </Header.Columns>
</Header>
```

### Header.AppName

```jsx
<Header>
    <Header.Columns columns="auto 1fr">
        <Header.Logo
            label={
                <Header.AppName>Varnish</Header.AppName>
            }>
            <img ... />
        </Header.Logo>
    </Header.Columns>
</Header
```

### Header.Tagline

A helper component for styling the App Tagline in the `<Header/>`.

```jsx
<Header>
    <Header.Columns columns="auto 1fr">
        <Header.Logo
            tagline={
                <Header.Tagline>An awesome app</Header.Tagline>
            }>
            <img ... />
        </Header.Logo>
    </Header.Columns>
</Header
```

## Examples

### Default

The Header provides sensible defaults and can be used out of the box without any changes.

{{"demo": "HeaderDefaultDemo.js", "defaultCodeOpen": false}}

### With Logo and Content

This shows how to render a header with an application logo. Logos make your application more fun, even emojis suffice!

{{"demo": "HeaderWithLogoDemo.js", "defaultCodeOpen": false}}

### With Tagline

This shows how to render a header with an application tagline.

{{"demo": "HeaderWithTaglineDemo.js", "defaultCodeOpen": false}}

### With Menu

This shows how to render a header with a logo and navigation.

{{"demo": "HeaderWithMenuDemo.js", "defaultCodeOpen": false}}

### AI2 Banner

A component that only displays the AI2 Banner.

{{"demo": "HeaderJustBannerDemo.js", "defaultCodeOpen": false}}

### Custom Header

Header with custom content.

{{"demo": "HeaderCustomDemo.js", "defaultCodeOpen": false}}

### Smart AI2 Banner

#### Collapse on Window Scroll

An AI2 Banner at the top of the header that collapses when the page is scrolled.

{{"demo": "HeaderWithTargetWindowSmartBanner.js", "defaultCodeOpen": false}}

#### Collapse on Target Div Scroll

An AI2 Banner at the top of the header that collapses when the target div is scrolled.

{{"demo": "HeaderWithTargetDivSmartBannerDemo.js", "defaultCodeOpen": false}}
