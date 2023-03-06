import { Box, Grid } from '@mui/material';
import Image from 'next/image';

export default function Brand() {
  return (
    <Box
      display={'flex'}
      alignItems='center'
      justifyContent='space-between'
      padding='4rem 6rem'
      flexWrap={'wrap'}
    >
      <Grid
        container
        spacing={2}
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <Grid
          item
          xs={12 / 3}
          sm={12 / 5}
        >
          <Image
            alt=''
            src='/assets/google.png'
            width='72'
            height='25'
          ></Image>
        </Grid>
        <Grid
          item
          xs={12 / 3}
          sm={12 / 5}
        >
          <Image
            alt=''
            src='/assets/slack.png'
            width='72'
            height='25'
          ></Image>
        </Grid>
        <Grid
          item
          xs={12 / 3}
          sm={12 / 5}
        >
          <Image
            alt=''
            src='/assets/atlassian.png'
            width='72'
            height='25'
          ></Image>
        </Grid>
        <Grid
          item
          xs={12 / 3}
          sm={12 / 5}
        >
          <Image
            alt=''
            src='/assets/dropbox.png'
            width='72'
            height='25'
          ></Image>
        </Grid>
        <Grid
          item
          xs={12 / 3}
          sm={12 / 5}
        >
          <Image
            alt=''
            src='/assets/shopify.png'
            width='72'
            height='25'
          ></Image>
        </Grid>
      </Grid>
    </Box>
  );
}
