import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }: any) {
  return (
    <div className='flex h-screen bg-blue-400 overflow-hidden'>
      <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2'>
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className='right flex flex-col rounded-r-md justify-evenly bg-white'>
          <div className='text-center py-10'>{children}</div>
        </div>
      </div>
    </div>
  );
}
