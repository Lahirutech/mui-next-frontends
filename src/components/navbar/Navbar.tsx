import { AppBar, Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import styles from './navbar.module.css';
export default function Navbar() {
  return (
    <Box className={styles['gpt3__navbar']}>
      <Box marginRight='5px'>Logo</Box>
      <Box className={styles['gpt3__navbar-links']}>
        <Typography variant='h6'>Home</Typography>
        <Typography variant='h6'>About</Typography>
        <Typography variant='h6'>Services</Typography>
        <Typography variant='h6'>Contact</Typography>
      </Box>
      <Box>
        <Stack
          direction='row'
          spacing={2}
        >
          <Button
            color='primary'
            variant='contained'
          >
            Sign In
          </Button>
          <Button
            color='secondary'
            variant='contained'
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
