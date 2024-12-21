import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import { Button, IconButton, MenuItem, Select, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="primary.contrastText" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Ashton Murphy
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
            backgroundColor: "primary.main"}}
        >
          {/* <Container maxWidth="sm">
            <Typography variant="body1" sx={{color: "secondary.contrastText"}}>
              My sticky footer can be found here.
            </Typography>
          </Container> */}


            <Grid container spacing={3} columns={3} size="grow" direction="row" justifyContent="center" alignItems="center">
              <Grid size={1} sx={{border: 1, py: 'auto'}} display='flex' justifyContent='right'>
                
              </Grid>
              <Grid size={1} sx={{border: 1, py: 'auto'}}>
                <Typography variant="h3" component="div" align="center" color='primary.contrastText'> 
                  Ashton Murphy
                </Typography>
                <Typography variant="subtitle2" component="div" align="center" color='primary.contrastText'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id venenatis ipsum. Morbi 
                dignissim sed magna at posuere. Phasellus velit nulla, ullamcorper quis scelerisque ut, tempus 
                et nunc. Sed sit amet magna quis metus vestibulum suscipit non ut sem. Donec. 
                </Typography>
                <Stack direction="row" spacing={2} alignItems={"center" } justifyContent="center">
                  <IconButton sx={{color: "primary.contrastText"}}>
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton sx={{color: "primary.contrastText"}}>
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Stack>
                {Copyright()}
              </Grid>
              <Grid size={1} sx={{border: 1, py: 'auto'}} display='flex' justifyContent='center'>
                
              </Grid>
            </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}