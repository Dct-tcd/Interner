import React from 'react'

// import Button from '@mui/material/Button';
// or
import { Button } from '@mui/material';
export default function Navbar({setForm,Form,divId}) {

  const handle=()=>
  {
    window.location="#diver";
  }
    const formclick = () => {
        let res=prompt("Enter The Admin Code:");
        if (res=="okaba")
        {
          Form==0 ? setForm(1) : setForm(0);
        }
    }
  return (
    <div > 
      <nav className=" navbar navbar-dark " style={{backgroundColor:"dimgray"}}>
  <a className="navbar-brand" href="/"> &nbsp; Interner </a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
    
  {/* </button> */}
    <div>
  <button  onClick={handle} style={{borderRadius:"6px",padding:"4px",
}}>About</button>
&nbsp;&nbsp;&nbsp;
    <button  onClick={formclick}  className="card-btn" style={{borderRadius:"6px",padding:"4px"}}>Admin</button>
    &nbsp;
    &nbsp;
    &nbsp;
    </div>
    {/* <span className="">&nbsp;</span> */}
    
</nav>
    </div>
  )
}
