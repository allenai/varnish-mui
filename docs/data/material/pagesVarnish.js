module.exports = [
  {
    pathname: '/material-ui/varnish/app',
    subheader: 'APP',
    children: [
      {
        pathname: '/material-ui/varnish/varnish-getting-started',
        title: 'Getting Started',
      },
      { pathname: '/material-ui/varnish/varnish-app', title: 'Varnish App' },
      { pathname: '/material-ui/varnish/varnish-theme', title: 'Theme' },
      {
        pathname: '/material-ui/varnish/varnish1-to-varnish2',
        title: 'Varnish1 Concepts in Varnish2',
      },
      {
        pathname: '/material-ui/varnish/how-to',
        title: 'How Do I...',
      },
      {
        pathname: '/material-ui/varnish/third-party-libs',
        title: 'Third Party Libraries',
      },
    ],
  },
  {
    pathname: '/material-ui/varnish/patterns',
    subheader: 'PATTERNS',
    children: [
      { pathname: '/material-ui/varnish/app-layout', title: 'App Layout' },
      { pathname: '/material-ui/varnish/menu-pattern', title: 'Menu' },
    ],
  },
  {
    pathname: '/material-ui/varnish/components',
    subheader: 'COMPONENTS',
    children: [
      { pathname: '/material-ui/varnish/header', title: 'AI2 Header' },
      { pathname: '/material-ui/varnish/footer', title: 'AI2 Footer' },
      { pathname: '/material-ui/varnish/logos', title: 'AI2 Logos' },
      { pathname: '/material-ui/varnish/colors' },
      { pathname: '/material-ui/varnish/error-boundary', title: 'Error Boundary' },
      {
        pathname: '/material-ui/varnish/copy-to-clipboard',
        title: 'Copy To Clipboard',
      },
      { pathname: '/material-ui/varnish/max-width-text', title: 'Max Width Text' },
    ],
  },
  {
    pathname: '/material-ui/varnish/extensions',
    subheader: 'EXTENSIONS',
    children: [
      {
        pathname: '/material-ui/varnish/shellac',
        title: 'Shellac',
      },
      {
        pathname: '/material-ui/varnish/eslint-config-varnish',
        title: 'ESLint Config Varnish',
      },
      {
        pathname: '/material-ui/varnish/varnish-with-react-router',
        title: 'Varnish With React Router',
      },
    ],
  },
];
