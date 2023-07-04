import { Container, Grid, Paper, SxProps } from "@mui/material";

const landingStyle: SxProps = {
  scrollMargin: '266px',
  scrollSnapAlign: 'start',
  'img': {
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px'
  },
  'ul': {
    paddingLeft: '16px'
  },
  '.MuiPaper-root': {
    padding: '1px 20px',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  '.demo-imgs': {
    marginTop: '20px'
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
    <h1 style={{textAlign: 'right'}}>...populate it with data using Javascript!</h1>
    <hr/>
    <Grid className='feature-panels' container spacing={2}>
      <Grid item xs={6} md={4}>
        <Paper>
          <h3>Separate style from content</h3>
          <ul>
            <li>Simple syntax inspiring from <a href=''>{'{Mustache}'}</a></li>
            <li>Supports:</li>
            <ul>
              <li>nested iterations and conditionals</li>
              <li>named tables</li>
              <li>merged cells</li>
              <li>multiple worksheets</li>
              <li>conditional styles</li>
            </ul>
            <li>Updates references in <b>formulae</b></li>
            <li>Runs on <b>browser</b> or <b>node</b></li>
            <li>Supports ExcelJs <a href=''>CellValue</a> to set style programmatically</li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper>
          <h3>Designed for Typescript</h3>
          <ul>
            <li>In-code types and documentation</li>
            <li>Provides utility to generate the type structure corresponding to the Excel template.</li>
            <li>Possibility to integrate type generation in the build process: this ensures template and data are aligned!</li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>
          <h3>Get started easily!</h3>
          <ul>
            <li>Try it yourself with the <a href=''>Demo</a> down below!</li>
            <li>This website is <a href=''>open-source</a>! Look at the code to see how to integrate ExcelTemplater in a project!</li>
          </ul>
        </Paper>
      </Grid>
    </Grid>
    <Grid className='demo-imgs' container spacing={2}>
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
  </Container>
}