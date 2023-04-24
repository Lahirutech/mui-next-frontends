import Image from 'next/image';
import React from 'react';
import styles from './chat.module.scss';
import { Messages } from '../messages/Messages';
import { Input } from '../input/Input';
function Chat() {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>{'User Name'}</span>
        <div className={styles.chatIcon}>
          <Image
            src='/image/cam.png'
            alt=''
            width={30}
            height={30}
          />
          <Image
            src='/image/add.png'
            alt=''
            width={30}
            height={30}
          />{' '}
          <Image
            src='/image/more.png'
            alt=''
            width={30}
            height={30}
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
