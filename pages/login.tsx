import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layout/layout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';

export default function Login() {
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
              type='pasword'
              name='password'
              placeholder='Password'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* Login buttons */}
          <div className='input-button'>
            <button
              type='submit'
              className={styles.button}
            >
              Login
            </button>
          </div>
          <div className='input-button'>
            <button
              type='button'
              className={styles.button_custom}
            >
              Sign In with Google{' '}
              <Image
                src={'/assets/google.svg'}
                alt='google'
                width='20'
                height={20}
              ></Image>
            </button>
          </div>
          <div className='input-button'>
            <button
              type='button'
              className={styles.button_custom}
            >
              Sign In with Github{' '}
              <Image
                alt='github'
                src={'/assets/github.svg'}
                width={25}
                height={25}
              ></Image>
            </button>
          </div>
        </form>

        {/* button */}
        <p className='text-center text-gray-400'>
          don't have an account yet?{' '}
          <Link
            className='text-blue-700'
            href={'/register'}
          >
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
