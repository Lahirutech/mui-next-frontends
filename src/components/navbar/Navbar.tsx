import React from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Lama chat</span>
      <div className={styles.user}>
        <Image
          src={''}
          alt=''
          height={24}
          width={24}
          style={{
            backgroundColor: '#ddddf7',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <span>{'Dispaly Name'}</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
