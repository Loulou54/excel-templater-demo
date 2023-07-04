import { Container, Grid, Button, SxProps } from "@mui/material";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

const callToActionStyle: SxProps = {
  'button': {
    filter: 'hue-rotate(300deg)',
    marginTop: '50px',
    ':hover': {
      animation: '2s ease-in-out hue-rotation 1'
    }
  }
};

export default function CallToAction() {
  const starIcon = <StarPurple500Icon/>;
  return <Container id='get-it' sx={callToActionStyle}>
    <h1>Get it!</h1>
    <hr/>
    <p>Access the documentation and Excel Templater's npm package on PrivJS!</p>
    <Grid container justifyContent='center'>
      <Button variant='contained' href='' startIcon={starIcon} endIcon={starIcon}>
          Get Excel Templater npm package!
      </Button>
    </Grid>
  </Container>
}
