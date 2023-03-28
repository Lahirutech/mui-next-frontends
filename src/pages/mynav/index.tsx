import { AppBar, Box, Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import styles from '../../../styles/home.module.css';

export default function index() {
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <AppBar position='static'>
      <Toolbar>
        {navItems.map((navItem) => (
          <div
            key={navItem.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              component={Link}
              href={navItem.href}
              color='inherit'
            >
              {navItem.label}
            </Button>
            <Box className={`${styles.line}`}></Box>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
}
