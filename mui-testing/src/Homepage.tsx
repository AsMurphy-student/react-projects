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
        <Typography variant="h3" component="div" align="left">Homepage</Typography>
      </ThemeProvider>

      <StickyFooter footerTheme={props.footerTheme} />
    </div>
  )
}

export default Homepage;
