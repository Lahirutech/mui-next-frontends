import '../../styles/globals.module.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import theme from '../theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1, width=device-width'
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  );
}

export default MyApp;
