import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function Article({ imgUrl, date, text }: any) {
  return (
    <Box
      width={{ sm: '48%', md: '100%' }}
      minHeight={'100px'}
      display='flex'
      flexDirection={'column'}
    >
      <Box
        height={{ sm: '250px', md: '100%' }}
        width='100%'
        bgcolor={'#040c18'}
      >
        <img
          width={'100%'}
          height={'100%'}
          src={imgUrl}
          alt='blog_image'
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent='space-between'
        padding={'1rem 1.5rem'}
        height='100%'
      >
        <Typography>{date}</Typography>
        <Typography>{text}</Typography>
        <Typography>Read full article</Typography>
      </Box>
    </Box>
  );
}
