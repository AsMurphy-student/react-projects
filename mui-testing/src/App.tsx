import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Card, CardMedia, Chip, Container, createTheme, Grid2, Paper, styled, Typography } from '@mui/material';
import ButtonAppBar from './components/AppBar';
import StickyFooter from './components/Footer';

import "./fonts/MartianMonoVF.ttf";

const theme = createTheme({
  typography: {
    fontFamily: 'MartianMono',
  },
  palette: {
    primary: {
      main: "#C2EFB3",
      light: "#000",
      dark: "#000",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#011638",
      light: "#000",
      dark: "#000",
      contrastText: "#FFF",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#FFF",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#FFF",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#FFF",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#FFF",
    },
  },
});

function App() {
  return (
    // <Container maxWidth="lg">
    //   <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    //     This Box renders as an HTML section element.
    //   </Box>
    // </Container>
    // <ResponsiveAppBar />
    // <ButtonAppBar theme={theme} />
    <ButtonAppBar theme={theme} />
  );
}

export default App;
