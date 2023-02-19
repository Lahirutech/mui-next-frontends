import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layout/layout';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../lib/validate';
import { useRouter } from 'next/router';
import { json } from 'stream/consumers';

export default function Login() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    onSubmit: onSubmit,
    validate: registerValidate,
  });

  async function onSubmit(values: any) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.error) router.push('http://localhost:3000');
        console.log('error message', data.message);
      })
      .catch((err) => {
        console.log('err from register', err);
      });
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
              type='text'
              placeholder='username'
              className={styles.input_text}
              {...formik.getFieldProps('username')}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className='text-rose-500'>{formik.errors.username}</span>
          ) : (
            <></>
          )}

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
              type={show.password ? 'text' : 'password'}
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => setShow({ ...show, password: !show.password })}
              />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className='text-rose-500'>{formik.errors.password}</span>
          ) : (
            <></>
          )}

          <div className={styles.input_group}>
            <input
              type={show.cpassword ? 'text' : 'password'}
              placeholder='Confirm Password'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span className='icon flex items-center px-4'>
              <HiFingerPrint
                size={25}
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className='text-rose-500'>{formik.errors.cpassword}</span>
          ) : (
            <></>
          )}
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
