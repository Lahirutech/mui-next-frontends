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
        mr={{ sx: '0rem', md: '5rem' }}
      >
        <Typography
          className={Hstyles.gradient__text}
          sx={{ typography: { sm: 'h2', xs: 'h3', md: 'h1' } }}
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

              input: {
                '&::placeholder': {
                  color: 'white',
                },
                color: 'white',
                backgroundColor: 'black',
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
        <Stack
          direction='row'
          alignItems='center'
          // alignContent='center'
          spacing={1}
        >
          <Image
            src='/assets/people.png'
            alt=''
            width='181'
            height='38'
          ></Image>
          <Typography>
            1,600 people requested access a visit in last 24 hours
          </Typography>
        </Stack>
      </Box>
      <Box
        width={'701'}
        height={'667'}
      >
        <Image
          alt=''
          src='/assets/ai.png'
          width='667'
          height='701'
          layout='responsive'
        ></Image>
      </Box>
    </Box>
  );
}
