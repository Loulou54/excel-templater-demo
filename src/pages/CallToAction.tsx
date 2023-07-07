import { Container, Grid, Button, SxProps } from "@mui/material";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

const callToActionStyle: SxProps = {
  '.MuiButton-root': {
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
    <p>Access the documentation and Mitosis - Excel Templater's npm package on PrivJS!</p>
    <Grid container justifyContent='center'>
      <Button variant='contained' href='https://app.privjs.com/buy/packageDetail?pkg=mitosis-excel-templater' target='_blank' startIcon={starIcon} endIcon={starIcon}>
          Get Mitosis - Excel Templater npm package!
      </Button>
    </Grid>
  </Container>
}
