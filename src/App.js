import logo from './logo.svg';
import './App.css';
import Desc from './components/Desc';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function App() {
  const [Form, setForm] = useState(0);
  return (
    <div style={{backgroundColor:"#343a40"}}>

      <Navbar Form={Form} setForm={setForm} divId={"diver"}/>
      <Desc formvis={Form}/>
      <About/>
      
    </div>
  );
}

export default App;
