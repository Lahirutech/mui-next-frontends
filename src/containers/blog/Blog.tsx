import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Article } from '../../components';
import styles from './blog.module.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

export default function Blog() {
  return (
    <Box
      display={'flex'}
      margin={'4rem 6rem'}
      flexDirection='column'
      id='blog'
    >
      <Typography
        variant='h2'
        className={`${styles.gradient__text}`}
      >
        A lot is happening,
        <br /> We are blogging about it.
      </Typography>

      <Box
        display={'flex'}
        flexDirection={{ md: 'row', sm: 'column-reverse' }}
      >
        <Box
          flex={0.75}
          marginRight='2rem'
          margin={{ sm: '2rem 0' }}
          width={{ sx: '100%', sm: '48%' }}
          height={{ sm: '250px' }}
        >
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </Box>

        <Box
          display={'grid'}
          flex={1}
          gridTemplateColumns={{ md: 'repeat(2,1fr)', sm: 'repeat(1, 1fr)' }}
          gap={'2rem'}
        >
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </Box>
      </Box>
    </Box>
  );
}
