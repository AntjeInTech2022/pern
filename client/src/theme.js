import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffef62',
      main: '#28282a',
      dark: '#b2a429',
    },
    secondary: {
      light: '#ffcf33',
      main: '#ffeb3b',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: '#757575',
      main: '#616161',
      dark: '#424242',
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
  textTransform: 'uppercase',
};

// const theme = {
//   ...rawTheme,
//   palette: {
//     ...rawTheme.palette,
//     background: {
//       ...rawTheme.palette.background,
//       default: rawTheme.palette.common.white,
//       placeholder: grey[200],
//     },
//   },
//   typography: {
//     ...rawTheme.typography,
//     fontHeader,
//     h1: {
//       ...rawTheme.typography.h1,
//       ...fontHeader,
//       letterSpacing: 0,
//       fontSize: 60,
//     },
//     h2: {
//       ...rawTheme.typography.h2,
//       ...fontHeader,
//       fontSize: 48,
//     },
//     h3: {
//       ...rawTheme.typography.h3,
//       ...fontHeader,
//       fontSize: 42,
//     },
//     h4: {
//       ...rawTheme.typography.h4,
//       ...fontHeader,
//       fontSize: 36,
//     },
//     h5: {
//       ...rawTheme.typography.h5,
//       fontSize: 20,
//       fontWeight: rawTheme.typography.fontWeightLight,
//     },
//     h6: {
//       ...rawTheme.typography.h6,
//       ...fontHeader,
//       fontSize: 18,
//     },
//     subtitle1: {
//       ...rawTheme.typography.subtitle1,
//       fontSize: 18,
//     },
//     body1: {
//       ...rawTheme.typography.body2,
//       fontWeight: rawTheme.typography.fontWeightRegular,
//       fontSize: 16,
//     },
//     body2: {
//       ...rawTheme.typography.body1,
//       fontSize: 14,
//     },
//   },
// };

export default theme;
