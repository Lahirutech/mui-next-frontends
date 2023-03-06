import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Feature({
  title = 'title',
  text = 'text',
}: {
  title: string;
  text: string;
}) {
  return (
    <Box
      display='flex'
      width='100%'
      margin={{ md: '1rem', sm: '1rem 0' }}
      flexDirection='column'
    >
      <Box
        flex={1}
        maxWidth='180px'
        mr='2rem'
      >
        <Box
          marginBottom={'0.25rem'}
          width={'38px'}
          height='3px'
          boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
          sx={{
            background:
              'linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%)',
          }}
        />
        <h1>{title}</h1>
      </Box>
      <Box
        display='flex'
        flex={2}
        textAlign={'justify'}
      >
        <Typography
          color={'white'}
          fontSize={{ md: '14px', sm: '12px' }}
          lineHeight={{ md: '24px', sm: '20ox' }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
