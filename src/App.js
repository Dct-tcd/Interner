import logo from './logo.svg';
import './App.css';
import Desc from './components/Desc';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';

function App() {
  const [Form, setForm] = useState(0);
  return (
    <div style={{
    // background: "#212529"
    }}>
      <Navbar Form={Form} setForm={setForm} divId={"diver"}/>
      <Desc formvis={Form}/>
      <About/>
    </div>
  );
}

export default App;
