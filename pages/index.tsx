import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Chat from '../src/components/chat/chat';
import styles from '../src/styles/home.module.scss';
import Sidebar from '../src/components/Sidebar/sidebar';
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
