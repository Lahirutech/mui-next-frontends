import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layout/layout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { signIn, signOut } from 'next-auth/react';
import { useFormik } from 'formik';
import login_validation from '../lib/validate';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  // google handler
  const handleGoogleLogin = async () => {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  };

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: onSubmit,
    validate: login_validation,
  });

  async function onSubmit(values: any) {
    const status: any = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    if (status.ok) router.push(status.url);
  }

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
        <form
          className='flex flex-col gap-5'
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.input_group}>
            <input
              type='email'
              placeholder='Email'
              className={styles.input_text}
              {...formik.getFieldProps('email')}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className='text-rose-500'>{formik.errors.email}</span>
          ) : (
            <></>
          )}

          <div className={styles.input_group}>
            <input
              type='password'
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className='text-rose-500'>{formik.errors.password}</span>
          ) : (
            <></>
          )}

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
              onClick={() => handleGoogleLogin()}
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
