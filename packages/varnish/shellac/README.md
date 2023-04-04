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
    --breakpoints-keys-0: xs;
    --breakpoints-keys-1: sm;
    --breakpoints-keys-2: md;
    --breakpoints-keys-3: lg;
    --breakpoints-keys-4: xl;
    --breakpoints-values-xs: 0px;
    --breakpoints-values-sm: 600px;
    --breakpoints-values-md: 900px;
    --breakpoints-values-lg: 1200px;
    --breakpoints-values-xl: 1536px;
...
}
```
