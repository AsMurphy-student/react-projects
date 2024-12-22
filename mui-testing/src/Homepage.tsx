import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Card, CardMedia, Chip, Container, createTheme, Grid2, Paper, SelectChangeEvent, styled, Theme, ThemeProvider, Typography } from '@mui/material';

//import "./fonts/MartianMonoVF.ttf";
import ReactDOM from 'react-dom';
import ButtonAppBar from './components/AppBar';
import StickyFooter from './components/Footer';

function Homepage(props: {headerTheme: Theme, bodyTheme: Theme, footerTheme: Theme, updateTheme: React.Dispatch<React.SetStateAction<number>>, currentTheme: number}) {
  
  return (
    <div>
      <ButtonAppBar headerTheme={props.headerTheme} updateTheme={props.updateTheme} currentTheme={props.currentTheme}/>
      <ThemeProvider theme={props.bodyTheme}>
        <Box sx={{ flexGrow: 1, pt: '2rem', backgroundColor: 'secondary.main' }}>
          <Typography variant="h3" component="h3" align="center">Newest Article</Typography>
            <Box sx={{ border: 5, mt: '2rem', mx: '10rem', p: '1rem', backgroundColor: 'primary.main' }}>
              <Typography variant="h5" component="h5" align="left">Optimization of Loading and Off-Loading of Trains - Factorio Macro-Logisitics</Typography>
            </Box>
        </Box>
      </ThemeProvider>

      <StickyFooter footerTheme={props.footerTheme} />
    </div>
  )
}

export default Homepage;
