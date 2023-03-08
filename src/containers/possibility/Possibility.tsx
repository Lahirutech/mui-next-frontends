import { Box, Typography } from '@mui/material';
import styles from './possibility.module.css';
import Hstyles from '../../../styles/home.module.css';

export default function Possibility() {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      padding='4rem 6rem'
      id='possibility'
    >
      <Box
        display={'flex'}
        className={`${styles.gpt3__possibility_image}`}
      >
        <img
          src={'/assets/possibility.png'}
          alt='possibility'
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        flex={1}
        justifyContent={'flex-end'}
        sx={{ '& > *': { marginBottom: '16px' } }}
      >
        <Typography
          variant='h4'
          color={'#71E5FF'}
          fontSize='16px'
        >
          Request Early Access to Get Started
        </Typography>
        <Typography
          variant='h2'
          className={Hstyles.gradient__text}
        >
          The possibilities are <br />
          beyond your imagination
        </Typography>
        <Typography variant='body1'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Typography>
        <Typography
          variant='h4'
          color={'#71E5FF'}
          fontSize='16px'
        >
          Request Early Access to Get Started
        </Typography>
      </Box>
    </Box>
  );
}
