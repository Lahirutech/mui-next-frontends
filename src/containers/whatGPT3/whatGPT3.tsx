import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Feature } from '../../components';
import styles from '../whatGPT3/gpt3.module.css';
import hstyles from '../../../styles/home.module.css';

export default function WhatGPT3() {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      padding={'2rem'}
      margin='4rem 6rem'
      className={`${styles.gpt3__whatgpt3}`}
    >
      <Box className={`${styles.gpt3__whatgpt3_feature}`}>
        <Feature
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on bWe so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </Box>
      <Box
        display='flex'
        flexDirection={{ md: 'row', sm: 'column' }}
        alignItems={{ md: 'center', sm: 'flex-start' }}
        justifyContent='space-between'
      >
        <Typography
          variant='h5'
          mt='1rem'
          className={`${hstyles.gradient__text}`}
        >
          The possibilities are beyond your imagination
        </Typography>
        <Typography variant='body1'> Explore the library</Typography>
      </Box>
      <Box className={`${styles.gpt3__whatgpt3_container}`}>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
        />
        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Feature
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </Box>
    </Box>
  );
}
