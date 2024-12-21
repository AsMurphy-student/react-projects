import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Card, CardMedia, Chip, Container, createTheme, Grid2, Paper, SelectChangeEvent, styled, Theme, Typography } from '@mui/material';
import ButtonAppBar from './components/AppBar';
import StickyFooter from './components/Footer';

//import MartianMono from "./fonts/MartianMonoVF.ttf";
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './About';

const defaultHeaderTheme = createTheme({
  typography: {
    fontFamily: 'MartianMono', 

    h3: {
      fontFamily: 'Playball',
    },
  },
  palette: {
    primary: {
      main: "#81b29a",
      light: "#000",
      dark: "#000",
      contrastText: "#f4f1de",
    },
    secondary: {
      main: "#e07a5f",
      light: "#000",
      dark: "#BB3E1D",
      contrastText: "#FFF",
    },
  },
});

const defaultBodyTheme = createTheme({
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
  },
});

const defaultFooterTheme = createTheme({
  typography: {
    fontFamily: 'MartianMono',

    h3: {
      fontFamily: 'Playball',
    },
  },
  palette: {
    primary: {
      main: "#3d405b",
      light: "#000",
      dark: "#000",
      contrastText: "#F2F2F2",
    },
    secondary: {
      main: "#011638",
      light: "#000",
      dark: "#000",
      contrastText: "#FFF",
    },
  },
});

const alternateHeaderTheme = createTheme({
  typography: {
    fontFamily: 'MartianMono', 

    h3: {
      fontFamily: 'BoldBlock',
    },
  },
  palette: {
    primary: {
      main: "#000",
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
  },
});

const alternateBodyTheme = createTheme({
  typography: {
    fontFamily: 'MartianMono',
  },
  palette: {
    primary: {
      main: "#000",
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
  },
});

const alternateFooterTheme = createTheme({
  typography: {
    fontFamily: 'MartianMono',

    h3: {
      fontFamily: 'BoldBlock',
    },
  },
  palette: {
    primary: {
      main: "#000",
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
  },
});

const themes: Theme[][] = [
  [defaultHeaderTheme, defaultBodyTheme, defaultFooterTheme],
  [alternateHeaderTheme, defaultBodyTheme, alternateFooterTheme]
];


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    setThemeIndex(getRandomInt(0, 1));
  }, []);

  return (
    // <Container maxWidth="lg">
    //   <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    //     This Box renders as an HTML section element.
    //   </Box>
    // </Container>
    // <ResponsiveAppBar />
    // <ButtonAppBar theme={theme} />
    // <div>
    //   <ButtonAppBar theme={themes[themeIndex]} updateTheme={setThemeIndex} currentTheme={themeIndex}/>
    // </div>
    //<Homepage theme={themes[themeIndex]} updateTheme={setThemeIndex} currentTheme={themeIndex} />

    // ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage 
          headerTheme={themes[themeIndex][0]} 
          bodyTheme={themes[themeIndex][1]}
          footerTheme={themes[themeIndex][2]}
          updateTheme={setThemeIndex} currentTheme={themeIndex} />} />
          <Route path="about" element={<About 
          headerTheme={themes[themeIndex][0]} 
          bodyTheme={themes[themeIndex][1]}
          footerTheme={themes[themeIndex][2]}
          updateTheme={setThemeIndex} currentTheme={themeIndex} />}/>
        </Routes>
      </BrowserRouter>
    // );
    
  )
}

export default App;
