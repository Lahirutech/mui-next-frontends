import { Box, Container } from '@mui/system';
import { Brand, Navbar, CTA } from '../components';
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from '../containers/index';
import styles from '../../styles/home.module.css';
export default function home() {
  return (
    <Box className={styles['gradient__bg']}>
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      {/* <Blog /> */}
    </Box>
  );
}
