import React, { useState } from 'react';
import styles from './input.module.scss';
import Image from 'next/image';

export const Input = () => {
  const [text, setText] = useState('');

  const handleSend = () => {};
  return (
    <div className={styles.inputWrapper}>
      <input
        type='text'
        placeholder='Send your message'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className={styles.send}>
        <Image
          src='/image/attach.png'
          width={24}
          height={24}
          alt=''
        />
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          onChange={() => ''}
        />
        <label htmlFor='file'>
          <Image
            src='/image/img.png'
            width={24}
            height={24}
            alt=''
          />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
