import { Box, Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import styles from './header.module.css';
import Hstyles from '../../../styles/home.module.css';

export default function Header() {
  return (
    <Box
      display='flex'
      flexDirection='row'
      id='home'
      className={`${styles.gpt3__header} ${Hstyles.section__padding}`}
    >
      <Box
        display='flex'
        flex={1}
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
        mr={'5rem'}
      >
        <Typography
          variant='h1'
          className={Hstyles.gradient__text}
        >
          Let’s Build Something amazing with GPT-3 OpenAI
        </Typography>
        <Typography>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Typography>
        <Stack
          direction='row'
          width={'100%'}
          margin='2rem 0 1rem'
        >
          <TextField
            fullWidth={true}
            sx={{
              width: '456',
              height: '73',
              backgroundColor: 'orange',
              input: {
                '&::placeholder': {
                  color: 'white',
                },
                color: 'white',
              },

              flex: 2,
              '& .MuiOutlinedInput-root.Mui-focused': {
                '& > fieldset': {
                  border: 'none',
                },
              },
            }}
            placeholder='Your Email'
          />
          <Button className={`${styles.get_started_button}`}>
            Get Started
          </Button>
        </Stack>
        <Stack direction='row'>
          <Image
            src=''
            alt='/assets/people.png'
            width='181'
            height='38'
          ></Image>
          <Typography>
            1,600 people requested access a visit in last 24 hours
          </Typography>
        </Stack>
      </Box>
      <Image
        alt=''
        src='/assets/ai.png'
        width='667'
        height='701'
      ></Image>
    </Box>
  );
}
