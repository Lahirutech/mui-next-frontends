import { useState } from 'react';

import { AppBar, Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <Box className={styles['gpt3__navbar']}>
      <Box className={styles['gpt3__navbar-links']}>
        <Box marginRight='5px'>
          <Image
            alt=''
            width={62.56}
            height={16.02}
            src='/assets/logo.svg'
          ></Image>
        </Box>
        <Box className={styles['gpt3__navbar-links_container']}>
          <Typography variant='h6'>Home</Typography>
          <Typography variant='h6'>What is GPT?</Typography>
          <Typography variant='h6'>Open AI</Typography>
          <Typography variant='h6'>Case Studies</Typography>
          <Typography variant='h6'>Library</Typography>
        </Box>
      </Box>
      <Box className={styles['gpt3__navbar-sign']}>
        <Button
          color='primary'
          variant='contained'
          sx={{ mr: '15px' }}
        >
          Sign In
        </Button>
        <Button
          color='secondary'
          variant='contained'
        >
          Sign Up
        </Button>
      </Box>

      {/* mobile menue */}
      <Box className={styles['gpt3__navbar-menu']}>
        {toggle ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggle(true)}
          />
        )}

        {toggle && (
          <Box
            className={styles['gpt3__navbar-menu_container scale-up-center']}
          >
            <Box className={styles['gpt3__navbar-menu_container-links']}>
              <Typography variant='h6'>Home</Typography>
              <Typography variant='h6'>What is GPT?</Typography>
              <Typography variant='h6'>Open AI</Typography>
              <Typography variant='h6'>Case Studies</Typography>
              <Typography variant='h6'>Library</Typography>
            </Box>
            <Box className={styles['gpt3__navbar-menu_container-links-sign']}>
              <Button
                color='primary'
                variant='contained'
                sx={{ mr: '15px' }}
              >
                Sign In
              </Button>
              <Button
                color='secondary'
                variant='contained'
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
