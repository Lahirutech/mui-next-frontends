import { Box } from '@mui/material';
import Image from 'next/image';

export default function Brand() {
  return (
    <Box
      display={'flex'}
      alignItems='center'
      justifyContent='space-between'
      padding=' 4rem 6rem'
      flexWrap={'wrap'}
    >
      {' '}
      <Image
        alt=''
        src='/assets/google.png'
        width='72'
        height='25'
      ></Image>{' '}
      <Image
        alt=''
        src='/assets/slack.png'
        width='72'
        height='25'
      ></Image>{' '}
      <Image
        alt=''
        src='/assets/atlassian.png'
        width='72'
        height='25'
      ></Image>{' '}
      <Image
        alt=''
        src='/assets/dropbox.png'
        width='72'
        height='25'
      ></Image>
      <Image
        alt=''
        src='/assets/shopify.png'
        width='72'
        height='25'
      ></Image>
    </Box>
  );
}
