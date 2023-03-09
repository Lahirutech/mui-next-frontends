import { Box, Button, Stack, Typography } from '@mui/material';
import styles from './cta.module.css';

export default function CTA() {
  return (
    <Box
      display={'flex'}
      margin={'4rem 6rem'}
      flexDirection='row'
      alignItems={'center'}
      justifyContent={'space-between'}
      padding='2rem'
      borderRadius='1rem'
      className={`${styles.bgColor}`}
    >
      <Box>
        <Stack>
          <Typography variant='body1'>
            Request Early Access to Get Started
          </Typography>
          <Typography variant='h4'>
            Register today & start exploring the endless possiblities.
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: 'black',
            borderRadius: '10px',
            padding: '15px',
          }}
          variant='contained'
        >
          {' '}
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
