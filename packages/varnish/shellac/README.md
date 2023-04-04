# Shellac

`Shellac` is a pared down version of `Varnish` that lets you make a polished, AI2 branded website with HTML alone.

## When To use

You should use `Shellac` for building simple, static sites. If your application is likely to be complex and include a lot of interactivity, use Varnish proper instead.

To use `Shellac` just download the template and start writing HTML:

`wget https://cdn.jsdelivr.net/npm/@allenai/varnish/shellac/shellac.html`

## What you get

All Varnish2/MUI styles expressed as CSS Variables.
e.g:

```
:root {
    --breakpoints-xs: 0px;
    --breakpoints-sm: 600px;
    --breakpoints-md: 900px;
    --breakpoints-lg: 1200px;
    --breakpoints-xl: 1536px;
    --palette-primary-light: #80BDFF;
    --palette-primary-main: #265ED4;
    --palette-primary-dark: #1B4596;
...
}
```
