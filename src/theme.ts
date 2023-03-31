import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    mychip: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'light' },
          style: {
            border: '2px solid white',
            background: 'green',
            fontFamily: 'cursive',
            color: 'white',
            '&:hover': { backgroundColor: 'green' },
          },
        },
      ],
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableElevation: true,
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'mychip' },
          style: {
            background: 'rgb(31 157 102 / 93%)',
          },
        },
      ],
    },
  },
});

export default theme;
