import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Theme, ThemeProvider } from '@emotion/react';
import Grid from '@mui/material/Grid2';

export default function ButtonAppBar(props: {theme: Theme, updateTheme: React.Dispatch<React.SetStateAction<number>>, currentTheme: number}) {

  const [selectIndex, setSelectIndex] = React.useState(props.currentTheme);

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

            <Grid container spacing={3} columns={3} size="grow" direction="row" justifyContent="center" alignItems="center">
              <Grid size={1} sx={{border: 1, py: 'auto'}}>
                <Typography variant="h6" component="div" align="left"> 
                  Ashton Murphy
                </Typography>
              </Grid>
              <Grid size={1} sx={{border: 1}} display='flex' justifyContent='center'>
                <Select
                  sx={{color: "primary.contrastText"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectIndex.toString()}
                  label="Age"
                  onChange={(event: SelectChangeEvent) => {
                    setSelectIndex(+event.target.value);
                    props.updateTheme(+event.target.value);
                  }}
                >
                  <MenuItem value={0}>Default</MenuItem>
                  <MenuItem value={1}>Alternate</MenuItem>
                  {/* <MenuItem value={2}>Thirty</MenuItem> */}
                </Select>
              </Grid>
              <Grid size={1} sx={{border: 1}} display='flex' justifyContent='right'>
                <Button sx={{color: "primary.contrastText", textDecorationLine: 'underline'}}>About Me</Button>
                <Button sx={{color: "primary.contrastText", textDecorationLine: 'underline'}}>Blog Posts</Button>
                <Button sx={{color: "primary.contrastText", textDecorationLine: 'underline'}}>Credits</Button>
              </Grid>
            </Grid>
            
            

              
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}