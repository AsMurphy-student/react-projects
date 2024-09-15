import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material';
import { Theme, ThemeProvider } from '@emotion/react';

export default function ButtonAppBar(props: {theme: Theme}) {

  

  return (
    <ThemeProvider theme={props.theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Typography variant="h6" component="div">
              News
            </Typography> */}
              <Button sx={{color: "primary.contrastText"}}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}