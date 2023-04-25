import Box from '@mui/material/Box';
import { PaletteMode, Stack, createTheme } from '@mui/material';
import { LeftBar } from '../src/components/LeftBar';
import Content from '../src/components/Content';
import RightBar from '../src/components/RightBar';
import Navbar from '../src/components/Navbar';
import { useState } from 'react';

export default function Home(props: {
  toggleTheme: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Box
      bgcolor={'background.default'}
      color={'text.primary'}
    >
      <Navbar />
      <Stack
        direction='row'
        spacing={2}
        justifyContent={'space-between'}
      >
        <LeftBar toggleTheme={props.toggleTheme} />
        <Content />
        <RightBar />
      </Stack>
    </Box>
  );
}
