import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import styled from '@emotion/styled';
import { useState } from 'react';

const StyledModel = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});
function AddOffer() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      {' '}
      <Tooltip
        onClick={() => setOpen(true)}
        title='Post Offer'
        sx={{
          position: 'fixed',
          bottom: 25,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab
          color='primary'
          aria-label='add'
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModel
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={380}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant='h6'
            color='gray'
            textAlign='center'
          >
            Create Offer
          </Typography>
          <UserBox>
            {' '}
            <Avatar
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              sx={{ width: 30, height: 30 }}
            />
            <Typography
              fontWeight={500}
              component='span'
              color='text.primary'
            >
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack
            direction='row'
            gap={1}
            mt={2}
            mb={3}
          >
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </Box>
  );
}

export default AddOffer;
