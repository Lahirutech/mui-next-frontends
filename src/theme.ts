import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { palette } from './theme/palette';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: palette,
  typography: {
    allVariants: {
      color: 'white',
      fontFamily: roboto.style.fontFamily,
    },
  },
});

export default theme;
