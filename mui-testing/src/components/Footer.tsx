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
    <Typography variant="body2" color="secondary.contrastText" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="/#">
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
          minHeight: '10vh',
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
              <Grid size={1} display='flex' justifyContent='right'>
                
              </Grid>
              <Grid size={1}>
                <Typography variant="h3" component="div" align="center" color='primary.main'> 
                  Ashton Murphy
                </Typography>
                <Typography variant="subtitle2" component="div" align="center" color='secondary.contrastText'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id venenatis ipsum. Morbi 
                dignissim sed magna at posuere. Phasellus velit nulla, ullamcorper quis scelerisque ut, tempus 
                et nunc. Sed sit amet magna quis metus vestibulum suscipit non ut sem. Donec. 
                </Typography>
                <Stack direction="row" spacing={2} alignItems={"center" } justifyContent="center">
                  <IconButton>
                    <Link href="https://www.linkedin.com/in/ashton-murphy-57605424a/" target="_blank">
                      <LinkedInIcon fontSize="large" sx={{color: "secondary.contrastText"}} />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <GitHubIcon fontSize="large" sx={{color: "secondary.contrastText"}} />
                  </IconButton>
                </Stack>
                {Copyright()}
              </Grid>
              <Grid size={1} display='flex' justifyContent='center'>
                
              </Grid>
            </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}