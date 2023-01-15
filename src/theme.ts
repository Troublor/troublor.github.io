import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    /**
     * Minimal width in pixels.
     */
    minWidth: number;
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    minWidth?: number;
  }
}

export const defaultTheme = createTheme({
  minWidth: 370,
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

export type ThemedProps = { theme: Theme };
