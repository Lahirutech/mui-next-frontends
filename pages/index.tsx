import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import { Stack } from '@mui/material';
import { LeftBar } from '../src/components/LeftBar';
import Content from '../src/components/Content';
import RightBar from '../src/components/RightBar';
import Navbar from '../src/components/Navbar';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction='row'
        spacing={2}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <LeftBar />
        <Content />
        <RightBar />
      </Stack>
    </Box>
  );
}
