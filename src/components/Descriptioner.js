import React from 'react'

export default function Descriptioner(props) {
  return (
    // style = {{display:props.vis!=0?'initial':'none'}}
    <div >
    {/* <div>
      {props.Desc}
    </div> */}
    {/* <h1>11</h1> */}
    <br></br>
    <h6 style={{backgroundColor:"floralwhite",width:"100%",height:"100%"}}>
     {props.desc}
    </h6>
   
    </div>
  )
}
