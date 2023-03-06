import { Box } from '@mui/system';
import { Feature } from '../../components';
import styles from '../whatGPT3/gpt3.module.css';

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
    </Box>
  );
}
