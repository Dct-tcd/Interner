import React from 'react'

export default function Descriptioner(props) {
  return (
    // style = {{display:props.vis!=0?'initial':'none'}}
    <div>
    <br></br>
    <h6 style={{width:"100%",height:"100%",marginLeft:'2px',marginRight:'2px',marginBottom:'2px'}}>
     {props.desc}
    </h6>
   
    </div>
  )
}
