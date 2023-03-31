import { Button, Stack } from '@mui/material';
import { Box, padding } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/home.module.css';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from 'react-icons/fa';

const navItems = ['About', 'Contact', 'Portfolio'];
export default function index() {
  return (
    <Box
      margin={0}
      padding={'0px 30px'}
      boxSizing='border-box'
      width={'100%'}
      height='100vh'
      sx={{
        background:
          'linear-gradient(rgba(0,0,0,0.3),transparent),url(assets/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      position='relative'
    >
      <Box
        className='nav'
        display={'flex'}
        width='100%'
        alignItems={'center'}
        justifyContent='space-between'
        flexWrap='wrap'
        padding='5px 0px'
        flexDirection='row'
      >
        <Image
          src='/assets/images/logo.png'
          width={'120'}
          height={'50'}
          alt='logo'
          className='logo'
        />
        <Box
          display='flex'
          flexDirection='row'
          justifyContent={'right'}
          flex={1}
        >
          {navItems.map((item, idx) => (
            <Box
              key={idx}
              display='flex'
              flexDirection='column'
              alignItems='center'
              className='navlink'
            >
              <li
                style={{
                  display: 'inline-block',
                  listStyle: 'none',
                  margin: '10px 30px',
                  color: 'white',
                }}
              >
                {item}
              </li>
              <Box
                mt={-1}
                className={`${styles.line} `}
              ></Box>
            </Box>
          ))}
        </Box>
        <Image
          width={30}
          height={25}
          src='/assets/images/cart.png'
          alt='logo'
          className='cart-icon'
        />
      </Box>

      {/* Nav End */}

      <Box className={styles.text_box}>
        <p>I'M</p>
        <h1>MAYARA</h1>
        <h3>BUILD BEAUTIFUL WEBSITES</h3>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          mt='30px'
          flexWrap='wrap'
        >
          <Button
            variant='outlined'
            sx={{ color: 'white', borderColor: 'white' }}
          >
            Explore My Portfolio
          </Button>
          <Button
            variant='outlined'
            endIcon={<ArrowRightAltSharpIcon />}
            sx={{ color: 'white', borderColor: 'white', ml: '5px' }}
          >
            Connect With Me
          </Button>
          <span className={styles.myself}>
            You can explore more about My Portfolio and
            <br /> Personal Life Experience Here
          </span>
        </Box>
      </Box>

      <Box
        position='absolute'
        right='5%'
        bottom='8%'
      >
        <Stack spacing={'7px'}>
          <Link href=''>
            <FaInstagramSquare size={30} />
          </Link>
          <Link href=''>
            <FaFacebook size={30} />
          </Link>
          <Link href=''>
            <FaTwitterSquare size={30} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
