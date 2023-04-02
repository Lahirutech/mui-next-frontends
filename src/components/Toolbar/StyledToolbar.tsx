import { Toolbar, styled } from '@mui/material';

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
