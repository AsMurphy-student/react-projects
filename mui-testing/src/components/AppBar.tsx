import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, FormControl, InputLabel, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Theme, ThemeProvider } from '@emotion/react';
import Grid from '@mui/material/Grid2';
import { Navigate, useNavigate } from 'react-router';
import { useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ButtonAppBar(props: {headerTheme: Theme, updateTheme: React.Dispatch<React.SetStateAction<number>>, currentTheme: number}) {

  //const [selectIndex, setSelectIndex] = React.useState(0);
  // useEffect(() => {
  //   setSelectIndex(props.currentTheme);
  // }, []);
  
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={props.headerTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='secondary'>
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />selectIndex.toString()
            </IconButton> */}

            <Grid container spacing={3} columns={3} size="grow" direction="row" justifyContent="center" alignItems="center">
              <Grid size={1}>
                <Typography variant="h3" component="div" align="left" color='primary.main' sx={{pt: 1}}> 
                  Ashton Murphy
                </Typography>
              </Grid>
              <Grid size={1} display='flex' justifyContent='center'>
                {/* <FormControl variant="filled">
                <InputLabel id="demo-simple-select-label" color='secondary' sx={{color: "primary.contrastText"}}>Theme</InputLabel>
                <Select
                  sx={{color: "primary"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={props.currentTheme.toString()}
                  label="Theme"
                  onChange={(event: SelectChangeEvent) => {
                    props.updateTheme(+event.target.value);
                  }}
                >
                  <MenuItem value={0}>Default</MenuItem>
                  <MenuItem value={1}>Alternate</MenuItem>
                </Select>
                </FormControl> */}
              </Grid>
              <Grid size={1} container spacing={3} display='flex' justifyContent='right'>
                <Button variant="contained" color="primary" onClick={() => {navigate("/")}}>Home</Button>

                <Button
                  id="basic-button"
                  color='primary'
                  variant='contained'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Journals
                </Button>
                <Menu
                  id="basic-menu"
                  sx={{"& .MuiMenu-paper": 
                      { backgroundColor: "secondary.main",
                        color: "secondary.contrastText",
                       },}}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => {
                    handleClose();
                    navigate("/about");
                  }}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

                <Button variant="contained" color="primary" onClick={() => {navigate("/about")}}>About Me</Button>
                <Button variant="contained" color="primary" onClick={() => {navigate("/")}}>Credits</Button>
              </Grid>
            </Grid>
            
            

              
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}