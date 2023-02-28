import {
  Button,
  Container,
  CssBaseline,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <Box
        display='flex'
        height='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Container
          maxWidth='xs'
          sx={{ padding: '25px', borderRadius: '10px' }}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src='/assets/leasure.png'
              alt=''
              width={200}
              height={200}
            ></Image>
          </Box>

          <Stack
            direction='column'
            spacing='10px'
            padding='10px'
          >
            <TextField
              required
              id='outlined-required'
              label='Email'
              defaultValue=''
            />
            <TextField
              required
              id='outlined-required'
              label='password*'
              defaultValue=''
            />
            <Button variant='contained'>Login</Button>
            <Stack
              direction='row'
              spacing='10px'
              justifyContent='space-between'
            >
              <Typography>Sign Up</Typography>
              <Typography>Forgot Password</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
