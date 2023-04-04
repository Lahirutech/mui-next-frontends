import {
  AppBar,
  Avatar,
  Box,
  Badge,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from '@mui/material';
import { DataUsageOutlined, Mail, Notifications } from '@mui/icons-material';
import {
  IconSet,
  ProfileIcon,
  SearchDiv,
  StyledToolbar,
} from './Toolbar/StyledToolbar';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        {/* Logo */}
        <Box>
          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } }}
            variant='h4'
          >
            Analytics
          </Typography>{' '}
          <DataUsageOutlined
            fontSize='large'
            sx={{ display: { xs: 'block', sm: 'none' } }}
          />
        </Box>
        <SearchDiv>
          <InputBase placeholder='Search...' />
        </SearchDiv>
        <IconSet>
          <Badge
            badgeContent={4}
            color='secondary'
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color='secondary'
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={() => setOpen(true)}
          />
        </IconSet>
        <ProfileIcon>
          {' '}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={() => setOpen(true)}
          />
        </ProfileIcon>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
