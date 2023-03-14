module.exports = [
  {
    pathname: '/material-ui/varnish/app',
    subheader: 'APP',
    children: [
      { pathname: '/material-ui/varnish/varnish-app', title: 'Varnish App' },
    ],
  },
  {
    pathname: '/material-ui/varnish/patterns',
    subheader: 'PATTERNS',
    children: [{ pathname: '/material-ui/varnish/app-layout', title: 'App Layout' }],
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
    ],
  },
  {
    pathname: '/material-ui/varnish/extensions',
    subheader: 'EXTENSIONS',
    children: [
      { pathname: '/material-ui/varnish/varnish-eslint-config', title: 'Varnish ESLint Config' },
      { pathname: '/material-ui/varnish/varnish-with-react-router', title: 'Varnish With React Router' },
    ],
  },
];
