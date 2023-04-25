import Box from '@mui/material/Box';
import Offer from './Offer';
import AddOffer from './AddOffer';
const Content = () => {
  return (
    <Box flex={4}>
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <AddOffer />
    </Box>
  );
};

export default Content;
