import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Card, CardMedia, Chip, Container, createTheme, Grid2, Paper, SelectChangeEvent, styled, Theme, Typography } from '@mui/material';

import "./fonts/MartianMonoVF.ttf";
import ReactDOM from 'react-dom';
import ButtonAppBar from './components/AppBar';

function Homepage(props: {theme: Theme, updateTheme: React.Dispatch<React.SetStateAction<number>>, currentTheme: number}) {

  return (
    <div>
      <ButtonAppBar theme={props.theme} updateTheme={props.updateTheme} currentTheme={props.currentTheme}/>
    </div>
  )
}

export default Homepage;
