import React, { useState } from 'react';
import logo from './logo.svg';
import './../../App.css';
import { AppBar, Box, Card, CardMedia, Chip, Container, createTheme, Grid2, Paper, SelectChangeEvent, Stack, styled, Theme, ThemeProvider, Typography } from '@mui/material';

//import "./fonts/MartianMonoVF.ttf";
import ReactDOM from 'react-dom';
import ButtonAppBar from '../../components/AppBar';
import StickyFooter from '../../components/Footer';
import screenshot from './../../images/test.gif';

function LoadingOffloading(props: {headerTheme: Theme, bodyTheme: Theme, footerTheme: Theme, updateTheme: React.Dispatch<React.SetStateAction<number>>, currentTheme: number}) {
  
  return (
    <div>
      <ButtonAppBar headerTheme={props.headerTheme} updateTheme={props.updateTheme} currentTheme={props.currentTheme}/>
      <ThemeProvider theme={props.bodyTheme}>
        {/* Main Box for Background Color */}
        <Box sx={{ flexGrow: 1, backgroundColor: 'secondary.main', pb: '2rem', pt: '2rem' }}>
          {/* Article Background Box */}
          <Box sx={{ border: 5, mx: '10rem', p: '1rem', backgroundColor: 'primary.main' }}>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}><img src={screenshot} alt="" /></Box>
            
            {/* Title and Date */}
            <Typography sx={{mt: '2rem'}} variant="h5" component="h5" align="left" color='primary.contrastText'>Optimization of Loading and Off-Loading of Trains</Typography>
            <Typography variant="h6" component="h6" align="left" color='primary.contrastText' sx={{flexGrow: 1, mt: 5}}>01, Jan, 2025</Typography>
            {/* Introduction */}
            <Typography variant="body1" component="p" align="left" color='primary.contrastText' sx={{mt: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin mi vitae massa facilisis volutpat. Aliquam tempus iaculis augue, vitae sollicitudin tellus mollis id. 
            Nam nulla metus, bibendum eget efficitur ac, sagittis vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nibh vel purus sollicitudin semper. Fusce sit 
            amet lectus id ante dignissim fermentum eget sit amet ipsum. Nullam mollis ornare turpis, quis aliquam leo sodales eu. Nullam aliquet porta augue, non condimentum lectus. Nullam 
            justo tortor, lobortis id posuere at, condimentum consectetur metus. 
            </Typography>
            <Typography variant="body1" component="p" align="left" color='primary.contrastText' sx={{mt: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin mi vitae massa facilisis volutpat. Aliquam tempus iaculis augue, vitae sollicitudin tellus mollis id. 
            Nam nulla metus, bibendum eget efficitur ac, sagittis vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nibh vel purus sollicitudin semper. Fusce sit 
            amet lectus id ante dignissim fermentum eget sit amet ipsum. Nullam mollis ornare turpis, quis aliquam leo sodales eu. Nullam aliquet porta augue, non condimentum lectus. Nullam 
            justo tortor, lobortis id posuere at, condimentum consectetur metus. 
            </Typography>
            <Typography variant="body1" component="p" align="left" color='primary.contrastText' sx={{mt: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin mi vitae massa facilisis volutpat. Aliquam tempus iaculis augue, vitae sollicitudin tellus mollis id. 
            Nam nulla metus, bibendum eget efficitur ac, sagittis vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nibh vel purus sollicitudin semper. Fusce sit 
            amet lectus id ante dignissim fermentum eget sit amet ipsum. Nullam mollis ornare turpis, quis aliquam leo sodales eu. Nullam aliquet porta augue, non condimentum lectus. Nullam 
            justo tortor, lobortis id posuere at, condimentum consectetur metus. 
            </Typography>
            <Typography variant="body1" component="p" align="left" color='primary.contrastText' sx={{mt: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin mi vitae massa facilisis volutpat. Aliquam tempus iaculis augue, vitae sollicitudin tellus mollis id. 
            Nam nulla metus, bibendum eget efficitur ac, sagittis vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nibh vel purus sollicitudin semper. Fusce sit 
            amet lectus id ante dignissim fermentum eget sit amet ipsum. Nullam mollis ornare turpis, quis aliquam leo sodales eu. Nullam aliquet porta augue, non condimentum lectus. Nullam 
            justo tortor, lobortis id posuere at, condimentum consectetur metus. 
            </Typography>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}><img src={screenshot} alt="" /></Box>
          </Box>

          {/* 
            Outline:
            

          */}
            
        </Box>
      </ThemeProvider>

      <StickyFooter footerTheme={props.footerTheme} />
    </div>
  )
}

export default LoadingOffloading;
