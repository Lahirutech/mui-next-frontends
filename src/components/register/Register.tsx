import Link from 'next/link';
import React, { useState } from 'react';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const handleSubmit = () => {};
  return (
    <div className='formcontainer'>
      <div className='formwarapper'>
        <form onSubmit={handleSubmit}>
          <input
            required
            type='text'
            placeholder='display name'
          />
          <input
            required
            type='email'
            placeholder='email'
          />
          <input
            required
            type='password'
            placeholder='password'
          />
          <input
            required
            type='file'
            style={{ display: 'none' }}
            id='file'
          />
          <label htmlFor='file'>
            <img
              src={''}
              alt=''
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
