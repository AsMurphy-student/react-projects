import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonUsage from "./components/Button";
import { Box, Card, CardMedia, Chip, Container, Grid2, Paper, styled, Typography } from '@mui/material';
import ResponsiveAppBar from './components/AppBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    // <Container maxWidth="lg">
    //   <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    //     This Box renders as an HTML section element.
    //   </Box>
    // </Container>
    <ResponsiveAppBar />
  );
}

export default App;
