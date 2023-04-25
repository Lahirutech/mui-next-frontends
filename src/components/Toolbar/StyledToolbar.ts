import { Toolbar, styled, Box } from '@mui/material';

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const SearchDiv = styled('div')(({ theme }) => ({
  background: 'white',
  width: '40%',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  height: '40px',
  display: 'flex',
}));

export const IconSet = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

export const ProfileIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
