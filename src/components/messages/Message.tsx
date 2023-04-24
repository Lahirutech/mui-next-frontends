import React, { useContext, useEffect, useRef } from 'react';
import styles from './message.module.scss';
import Image from 'next/image';

const Message = ({ message }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`${styles.message} ${
        message.senderId === currentUser.uid && styles.owner
      }`}
    >
      <div className={styles.messageInfo}>
        <Image
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=''
        />
        <span>Just Now</span>
      </div>
      <div className={styles.messageContent}>
        <p>{message.text}</p>
        {message.img && (
          <img
            src={message.img}
            alt=''
          />
        )}
      </div>
    </div>
  );
};

export default Message;
