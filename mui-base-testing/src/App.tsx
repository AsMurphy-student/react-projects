import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './TestButton';
import { Button } from '@mui/base';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/test')}>Button</Button>
  );
}

export default App;
