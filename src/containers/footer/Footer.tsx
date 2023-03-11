import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      alignItems={'center'}
      justifyContent='center'
      bgcolor='#031B34'
      padding='4rem 6rem'
    >
      <Typography
        variant='h2'
        textAlign={'center'}
        className={`${styles.gradient__text}`}
      >
        Do you want to step in to the
        <br /> future before others
      </Typography>
      <Button
        sx={{ mt: '30px' }}
        variant='outlined'
      >
        Request Early Access
      </Button>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems='flex-start'
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        width={'100%'}
        textAlign={'left'}
        mt='30px'
      >
        <Stack
          spacing={2}
          direction={'column'}
        >
          <img
            src={'/assets/logo.svg'}
            alt='gpt3_logo'
            width={'118px'}
            height={'30px'}
          />

          <Typography variant='body1'>
            Crechterwoord K12 182 DK Alknjkcb,
            <br /> All Rights Reserved
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          direction={'column'}
        >
          <Typography fontWeight={'800'}>Links</Typography>
          <Typography>Overons</Typography>
          <Typography>Social Media</Typography>
          <Typography>Counters</Typography>
          <Typography>Contact</Typography>
        </Stack>
        <Stack
          spacing={2}
          direction={'column'}
        >
          <Typography fontWeight={'800'}>Company</Typography>
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Contact</Typography>
        </Stack>{' '}
        <Stack
          direction={'column'}
          spacing={2}
        >
          <Typography fontWeight={'800'}>Get in touch</Typography>
          <Typography>Crechterwoord K12 182 DK Alknjkcb</Typography>
          <Typography>085-132567</Typography>
          <Typography>info@payme.net</Typography>
        </Stack>
      </Box>
      <Box mt={'35px'}>
        <Typography>@2021 GPT-3. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
