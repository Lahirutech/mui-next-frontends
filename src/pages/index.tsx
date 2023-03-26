import { Box, padding } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
        flexWrap='wrap'
        padding='5px 0px'
      >
        <Image
          src='/assets/images/logo.png'
          width={'120'}
          height={'50'}
          alt='logo'
          className='logo'
        />
        <ul style={{ flex: 1, textAlign: 'right', paddingRight: '30px' }}>
          <li
            style={{
              display: 'inline-block',
              listStyle: 'none',
              margin: '10px 30px',
            }}
          >
            <Link href={''}>About</Link>
          </li>
          <li
            style={{
              display: 'inline-block',
              listStyle: 'none',
              margin: '10px 30px',
            }}
          >
            <Link href={''}>About</Link>
          </li>
          {/* <li>
            <Link href={''}>Contact</Link>
          </li>
          <li>
            <Link href={''}>Portfolio</Link>
          </li> */}
        </ul>
        <Image
          width={30}
          height={15}
          src='/assets/images/cart.png'
          alt='logo'
          className='cart-icon'
        />
      </Box>
    </Box>
  );
}
