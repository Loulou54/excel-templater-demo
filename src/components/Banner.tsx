import { Container, Box, Typography, SxProps } from '@mui/material';
import { toJSON } from 'src/templates/template-data';

const bannerStyle: SxProps = {
  scrollSnapAlign: 'start',
  height: '400px',
  backgroundColor: '#5d9975',
  paddingTop: '56px',
  color: '#FFF',
  'h5': { fontFamily: 'monospace' },
  '.MuiContainer-root': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'end',
    paddingBottom: '40px'
  },
  '#init-banner': {
    animation: '0.5s ease-in-out disappear calc((var(--scroll) - 0.5) * -1s) both paused, 0.7s ease-in-out translate-down calc(var(--scroll) * -1s) both paused',
    '>h3': {
      animation: '0.7s ease-in-out translate-down calc(var(--scroll) * -1s) both paused',
      marginBottom: '180px'
    },
    '>h5': {
      animation: '0.7s ease-in-out translate-up calc(var(--scroll) * -1s) both paused'
    }
  },
  '#final-banner': {
    animation: '0.5s ease-in-out disappear calc((var(--scroll) - 0.5) * -1s) reverse both paused',
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
