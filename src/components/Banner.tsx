import { Container, Box, Typography, SxProps } from '@mui/material';
import { toJSON } from 'src/templates/template-data';

const bannerStyle: SxProps = {
  height: '400px',
  backgroundColor: '#5d9975',
  paddingTop: '56px',
  color: '#FFF',
  'h5': { fontFamily: 'monospace' },
  '.MuiContainer-root': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  },
  '#init-banner': {
    animation: '0.5s ease-in-out disappear 3s both',
    '>h3': {
      animation: '1s ease-in-out shrink-margin 2s both'
    }
  },
  '#final-banner': {
    animation: '0.5s ease-in-out disappear 3s reverse both',
    position: 'absolute'
  }
};

const jsonBanner = toJSON({difficulty: 'easily'});

export default function Banner() {
  return <Box sx={bannerStyle}>
    <Container>
      <Box id='init-banner'>
        <Typography variant='h3'>{'Generate Excel files from templates {difficulty}!'}</Typography>
        <Typography variant='h5'>{jsonBanner}</Typography>
      </Box>
      <Box id='final-banner'>
        <Typography variant='h3'>Generate Excel files from templates easily!</Typography>
      </Box>
    </Container>
  </Box>;
}
