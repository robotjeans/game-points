import { darken, lighten } from 'polished';

import colors from '../colors';

const theme = {
  colors: {
    black: colors.black,
    white: colors.white,
    blue: colors.blue,
    red: colors.red,
    background: colors.gray,
    body: colors.gray75,
    disabled: darken(0.05, colors.gray5),
    headings: colors.black,
    borders: darken(0.05, colors.gray5),
    hover: {
      blue: lighten(0.75, colors.blue),
      red: lighten(0.75, colors.red),
    },
    tiles: ['#fc5c65', '#fd9644', '#fed330', '#26de81', '#2bcbba', '#3867d6'],
  },
  fonts: {
    headings: 'Montserrat, sans-serif',
    body: 'Roboto, sans-serif',
    monospace: 'Roboto,  monospace',
  },
  fontSizes: {
    body: '1rem',
    h1: '4.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  widths: {
    sm: '28em',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
  heights: {
    header: '55px',
  },
};

export default theme;
