import { AppBar, Box, Typography, InputBase } from '@mui/material';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import { SearchDiv, StyledToolbar } from './Toolbar/StyledToolbar';

const Navbar = () => {
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
          <DataUsageOutlinedIcon
            fontSize='large'
            sx={{ display: { xs: 'block', sm: 'none' } }}
          />
        </Box>
        <SearchDiv>
          <InputBase placeholder='Search...' />
        </SearchDiv>
        <Box>Iconset</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
