import {createTheme} from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#983212',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d15730',
      contrastText: '#fff',
    },
    text: {
      primary: '#454360',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h6: {
      fontSize: '20px',
      fontWeight: 700,
    },
  },
});
