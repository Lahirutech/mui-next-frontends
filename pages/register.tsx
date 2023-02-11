import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layout/layout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';

export default function Login() {
  const [show, setShow] = useState({ password: false, cpassword: false });

  return (
    <Layout>
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
          <p className='text-black w-3/4 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* Form */}

        <form className='flex flex-col gap-5'>
          <div className={styles.input_group}>
            <input
              type='text'
              name='username'
              placeholder='username'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={show.password ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => setShow({ ...show, password: !show.password })}
              />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={show.cpassword ? 'text' : 'password'}
              name='confirmpassword'
              placeholder='Confirm Password'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              />
            </span>
          </div>
          {/* Login buttons */}
          <div className='input-button'>
            <button
              type='submit'
              className={styles.button}
            >
              Register
            </button>
          </div>
        </form>

        {/* button */}
        <p className='text-center text-gray-400'>
          Already has a account?{' '}
          <Link
            className='text-blue-700'
            href={'/login'}
          >
            Sign in
          </Link>
        </p>
      </section>
    </Layout>
  );
}
