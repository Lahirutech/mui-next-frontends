import React, { useState } from 'react';
import styles from './search.module.scss';

function Search() {
  const [err, setErr] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input
          type='text'
          placeholder='Find a user'
          onKeyDown={() => ''}
          onChange={() => ''}
          value={''}
        />
      </div>
      {err && <span>User not Found</span>}
      {user && (
        <div
          className={styles.userChat}
          onClick={() => ''}
        >
          <img
            src={user}
            alt=''
          />
          <div className={styles.userChatInfo}>
            <span>{user}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
