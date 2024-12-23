import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Card, CardMedia, Chip, Container, createTheme, Grid2, Paper, SelectChangeEvent, Stack, styled, Theme, ThemeProvider, Typography } from '@mui/material';

//import "./fonts/MartianMonoVF.ttf";
import ReactDOM from 'react-dom';
import ButtonAppBar from './components/AppBar';
import StickyFooter from './components/Footer';
import screenshot from './images/22-12-2024_21-02-45.png';

function Homepage(props: {headerTheme: Theme, bodyTheme: Theme, footerTheme: Theme, updateTheme: React.Dispatch<React.SetStateAction<number>>, currentTheme: number}) {
  
  return (
    <div>
      <ButtonAppBar headerTheme={props.headerTheme} updateTheme={props.updateTheme} currentTheme={props.currentTheme}/>
      <ThemeProvider theme={props.bodyTheme}>
        <Box sx={{ flexGrow: 1, pt: '2rem', backgroundColor: 'secondary.main' }}>
          <Typography variant="h3" component="h3" align="center">Newest Article</Typography>

            <Box sx={{ border: 5, mt: '2rem', mx: '10rem', p: '1rem', backgroundColor: 'primary.main' }}>
            <Stack direction="row" sx={{flexGrow: 1}}>
                <Container sx={{flexGrow: 1}}>
                  <Typography variant="h5" component="h5" align="left">Optimization of Loading and Off-Loading of Trains</Typography>
                  <Stack direction="row" sx={{flexGrow: 1, mt: 3}}>
                    <Typography variant="h6" component="h6" align="left" sx={{flexGrow: 1}}>Factorio Logistics</Typography>
                    <Typography variant="h6" component="h6" align="right">01, Jan, 2025</Typography>
                  </Stack>

                  <Typography variant="body1" component="p" align="left" sx={{mt: 5}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin mi vitae massa facilisis volutpat. Aliquam tempus iaculis augue, vitae sollicitudin tellus mollis id. 
                  Nam nulla metus, bibendum eget efficitur ac, sagittis vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nibh vel purus sollicitudin semper. Fusce sit 
                  amet lectus id ante dignissim fermentum eget sit amet ipsum. Nullam mollis ornare turpis, quis aliquam leo sodales eu. Nullam aliquet porta augue, non condimentum lectus. Nullam 
                  justo tortor, lobortis id posuere at, condimentum consectetur metus. 
                  </Typography>
                </Container>

                <Box sx={{width: '50%'}}><img src={screenshot} alt="" /></Box>
                
              </Stack>
            </Box>
            
        </Box>
      </ThemeProvider>

      <StickyFooter footerTheme={props.footerTheme} />
    </div>
  )
}

export default Homepage;
