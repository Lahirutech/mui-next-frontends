import React from 'react';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import Chats from '../chats/Chats';
import styles from './sidebar.module.scss';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
