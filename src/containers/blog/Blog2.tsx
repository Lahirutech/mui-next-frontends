import { Box, Typography } from '@mui/material';
import { Grid, Paper } from '@mui/material';

import styles from './blog.module.css';

export default function Blog() {
  return (
    <>
      <Box
        display={'flex'}
        margin={'4rem 6rem'}
        flexDirection='column'
        id='blog'
      >
        <Typography
          variant='h2'
          className={`${styles.gradient__text}`}
        >
          A lot is happening,
          <br /> We are blogging about it.
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Paper sx={{ height: '100%' }}>Card 1</Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={6}
              >
                <Paper sx={{ height: '50%' }}>Card 2</Paper>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <Paper sx={{ height: '50%' }}>Card 3</Paper>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <Paper sx={{ height: '50%' }}>Card 4</Paper>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <Paper sx={{ height: '50%' }}>Card 5</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
