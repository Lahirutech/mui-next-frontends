import Link from 'next/link';
import React, { useState } from 'react';
import styles from './register.module.scss';
import Image from 'next/image';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const handleSubmit = () => {};
  return (
    <div className={styles.formcontainer}>
      <div className={styles.formwarapper}>
        <span className={styles.logo}>Lama Chat</span>
        <span className={styles.title}>Login</span>
        <form onSubmit={handleSubmit}>
          <input
            required
            type='text'
            placeholder='Display Name'
          />
          <input
            required
            type='email'
            placeholder='Email'
          />
          <input
            required
            type='password'
            placeholder='Password'
          />
          <input
            required
            type='file'
            style={{ display: 'none' }}
            id='file'
          />
          <label htmlFor='file'>
            <Image
              src='/image/img.png'
              alt=''
              width={33}
              height={33}
            />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}> Sign Up</button>
          {loading && 'Creating yur account'}
          {err && 'Something went wrong'}
        </form>
        <p>
          You do have an account? <Link href='/register'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
