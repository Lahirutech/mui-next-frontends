import { useState } from 'react';
import styles from '../../styles/common.module.scss';
import Link from 'next/link';

export default function Login() {
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
            type='email'
            placeholder='Email'
          />
          <input
            required
            type='password'
            placeholder='Password'
          />

          <button disabled={loading}> Sign in</button>
          {loading && 'Logging to your account'}
          {err && 'Something went wrong'}
        </form>
        <p>
          Don't have an account? <Link href='/register'>Signup</Link>
        </p>
      </div>
    </div>
  );
}
