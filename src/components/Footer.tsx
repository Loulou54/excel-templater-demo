import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: '#FFF',
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: '80px'
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">
              Excel Templater
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | Louis Workplace | `}<a href='mailto:contact@louisworkplace.net' style={{textDecoration: 'unset'}}>Contact</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}