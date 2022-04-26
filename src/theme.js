import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F86338',
    },
    secondary: {
      main: '#11142D',
      light: '#515151',
    },

    text: {
      light: '#515151',
      main: '#11142D',
    },
  },
  typography: {
    fontFamily: ['DM Sans', 'Merriweather'].join(','),
  },
});
