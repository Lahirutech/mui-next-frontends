import { useState } from 'react';
import styles from './message.module.scss';
import Message from './Message';

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div className={styles.messages}>
      {messages.map((m) => (
        <Message
          message={m}
          key={m.id}
        />
      ))}
    </div>
  );
};
