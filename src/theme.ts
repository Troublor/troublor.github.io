import { createTheme } from '@mui/material/styles';

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
    warning: {
      main: '#ff4c60',
      contrastText: '#fff',
    },
    text: {
      primary: '#454360',
      secondary: '#fff',
    },
    background: {
      default: '#f1f7ff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 700,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
    },
  },
});

export type ThemedProps = { theme: typeof defaultTheme };
