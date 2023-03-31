import { Button, Chip, Typography } from '@mui/material';
import React from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export default function index() {
  return (
    <div>
      <Typography>My name</Typography>
      <Button variant='light'>Light button</Button>
      <Button variant='contained'>Original </Button>
      <Chip
        icon={<TagFacesIcon />}
        label={'This is a tag'}
        // onDelete={}
      />
      <Chip
        icon={<TagFacesIcon />}
        variant='mychip'
        label={'custom Chip'}
      />
    </div>
  );
}
