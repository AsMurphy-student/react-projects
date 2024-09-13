import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './TestButton';
import { Button, Slider } from '@mui/base';
import { useNavigate } from 'react-router-dom';

function TestPage() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/')}>Return</Button>
  );
}

export default TestPage;
