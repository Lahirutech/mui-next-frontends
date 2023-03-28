import { Box, padding } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/home.module.css';
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
          height={15}
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
      </Box>
    </Box>
  );
}
