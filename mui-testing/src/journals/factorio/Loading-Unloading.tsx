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
            Outline: V0.1
            Introduction
              Explain how production shifts to involve more with trains
                From small distance to large distance
                Also helps with scalability and creating modular components
            Optimizing Train Station Selection
              Before optimizing loading and offloading first focus on circuitry required for station priority
              Explain the need for station prioritization and how it helps with scaling
              Start with different examples of circuitry
                Sum of all chests
                  Explain possible problem if the inputs are not depleted evenly
                  Train cannot offload as quickly
                Chest groups
                  Trains will not stop if not all inputs can be depleted at the same speed
                  Will keep trains going at a steady speed
            Optimizing Train loading and offloading
              Loading
              Offloading
            Fluid Trains
              Same but fluid trains
              much simpler

            
            Writing Test
            
            (Title Gif shows multiple trains stopping and dropping off consistently)

            Optimizing Station Priority and Train Loading and Offloading to Increase Overall Logistical Throughput
            
            Factorio is quite an interesting game with innovating and iterating on creative solutions 
            to solve different problems. It is a constantly feedback loop where you'll fix a problem 
            such as increasing production of some item which is in demand, or not being produced enough to meet 
            the current demand, and in the process of fixing this problem you'll often have another item likWhewise 
            not meet the demand as a result of increasing production of another item.

            This presents a scalability issue with production of items in your factory and if you're 
            eyeing to ultimately increase your production with the goal of increasing your science per 
            minute production. For those that are not familiar with Factorio, science is generally what 
            you want to increase as your save file continues. Science allows your to unlock new technologies 
            such as faster conveyor belts and faster inserters which increase throughput and how fast items 
            move within your factory. Conveyor belts can quickly be hard to manage and get very messy 
            (or as some would say become spagetti) and changing their designs can be hard. They also can 
            be very difficult to move items across long distances which becomes a bigger problem as 
            resource veins are depleted.

            (Gif showing how messy conveyor belts can become)

            How do Trains work and How can they efficiently choose their stop?

            Another research from science can help fix these problems of scaling, long distance transportation, 
            and design management and this research technology is trains. While conveyors belts are slow they 
            are consistent. Trains, on the other hand, are significantly faster than conveyors and can move 
            more items, however the time of transport is not fixed as many trains can run on the same system 
            and affect each other's travel times. While there are many resources discussing train signalling 
            and junctions, I will be focusing on stop allocation along with optimizing how trains are loaded 
            and unloaded. First it will be important to go over how trains work.

            

          */}
            
        </Box>
      </ThemeProvider>

      <StickyFooter footerTheme={props.footerTheme} />
    </div>
  )
}

export default LoadingOffloading;
