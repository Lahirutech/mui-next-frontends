import { AppBar, Button } from '@mui/material';
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from '../containers/index';
import theme from '../theme';
export default function home() {
  return (
    <div>
      <AppBar position='static'></AppBar>
      <Button
        variant='contained'
        color='neutral'
      >
        Button
      </Button>{' '}
    </div>
  );
}
