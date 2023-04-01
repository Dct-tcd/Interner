import React from 'react'

export default function Navbar({setForm,Form}) {
    const formclick = () => {
        let res=prompt("Enter The Admin Code:");
        if (res=="okaba")
        {
          Form==0 ? setForm(1) : setForm(0);
        }
    }
  return (
    <div>
      <nav className=" navbar navbar-dark bg-primary ">
  <a className="navbar-brand" href="#"> &nbsp; Job Hunter </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <button onClick={formclick}  className="card-btn" style={{borderRadius:"6px",padding:"4px"}}>Admin</button>
    {/* <span className="">&nbsp;</span> */}
    
  </button>
</nav>
    </div>
  )
}
