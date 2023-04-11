import React from 'react';
import styles from './navbar.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className='logo'>Lama chat</span>
      <div className='user'>
        <img
          src={''}
          alt=''
        />
        <span>{'Dispaly Name'}</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
