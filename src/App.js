import logo from './logo.svg';
import './App.css';
import Desc from './components/Desc';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [Form, setForm] = useState(0);
  return (
    <div style={{
    // background: "#212529"
    }}>
      <Navbar Form={Form} setForm={setForm}/>
      <Desc formvis={Form}/>
    </div>
  );
}

export default App;
