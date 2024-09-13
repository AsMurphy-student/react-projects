import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './TestButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import TestPage from './TestPage';

function Root() {
  return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/test' element={<TestPage />} />
        </Routes>
  );
}

export default Root;