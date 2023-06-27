import { Container, Grid, SxProps, Typography } from "@mui/material";

const landingStyle: SxProps = {
  'img': {
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px'
  }
};

const plusStyle: SxProps = {
  padding: '0 !important',
  textAlign: 'center',
  fontSize: '75px',
  position: 'relative',
  height: 0,
  top: '-35px',
  color: '#5d9975',
  '>span': {
    position: 'absolute',
    right: '-22px',
    top: '-13px'
  }
};

export default function LandingPage() {
  return <Container id='presentation' sx={landingStyle}>
    <h1>Style and format your template with Excel...</h1>
    <h1 style={{textAlign: 'right'}}>...populate with data using Javascript!</h1>
    <hr/>
    <Grid container spacing={2}>
      <Grid item container xs={7} spacing={2}>
        <Grid item xs={12}>
          <img src='./img/balance-sheet-screen.png' width='100%'/>
        </Grid>
        <Grid item xs={12} sx={plusStyle}>+<span>🡆</span></Grid>
        <Grid item xs={12}>
          <img src='./img/data-screen.png' width='100%'/>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <img src='./img/balance-sheet-generated-screen.png' width='100%'/>
      </Grid>
    </Grid>
    <h2>Separate style from content, cut iterations short.</h2>
    <Typography>This is really great, just try it.</Typography>
  </Container>
}