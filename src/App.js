import React from 'react';
import './App.css';
import Home from './components';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <CssBaseline/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
