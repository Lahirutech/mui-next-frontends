import { Box } from '@mui/system';
import React from 'react';

export default function index() {
  return (
    <Box
      margin={0}
      padding={0}
      boxSizing='border-box'
      width={'100%'}
      height='100vh'
      sx={{
        background:
          'linear-gradient(rgba(0,0,0,0.3),transparent),url(assets/images/background.png)',
      }}
    ></Box>
  );
}
