import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import { Button, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter(props: {footerTheme: Theme}) {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={props.footerTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: "secondary.main"}}
        >
          {/* <Container maxWidth="sm">
            <Typography variant="body1" sx={{color: "secondary.contrastText"}}>
              My sticky footer can be found here.
            </Typography>
          </Container> */}


            <Grid container spacing={3} columns={3} size="grow" direction="row" justifyContent="center" alignItems="center">
              <Grid size={1} sx={{border: 1, py: 'auto'}}>
                <Typography variant="h6" component="div" align="left" color='primary.contrastText'> 
                  Ashton Murphy
                </Typography>
              </Grid>
              <Grid size={1} sx={{border: 1}} display='flex' justifyContent='center'>

              </Grid>
              <Grid size={1} sx={{border: 1}} display='flex' justifyContent='right'>
                
              </Grid>
            </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}