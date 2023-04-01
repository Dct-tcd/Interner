import React from 'react'

export default function Newsitem(props) {
      return (
    
<div className='container my-3 md-4' style={{boxShadow:"4px 4px 2px lightgrey",backgroundColor:"white"}}>
    <div className="card" style={{ width: "18rem" }}>
      {/* <div className="container1" style={{left:"90px"}}> */}
    {/* <span className="position-absolute top-0  badge rounded-pill bg-danger">
    {props.srcname} */}
  {/* </span> */}
  {/* </div> */}
        <img src={props.url==null?"https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg":props.url} className="card-img-top" alt="..." style={{Width:"60px",height:"150px"}}/>
            <div className="card-body" style={{display:"flex",justifyContent:"center"}}>
              
                <h3 className="card-title" style={{color:"purple"}}>{props.title}</h3>
                </div>
                <p className="card-text" style={{color:"grey"}}>&nbsp; Batch : {props.Batch}</p>
                <p className="card-text" style={{color:"grey"}}>&nbsp; Stipend : {props.stipend}</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <a target='_blank' href={`${props.ApplyLink}`}> Apply Here </a>
                <a>👍🍀</a>
                </div>  
                {/* <p className="card-text"><small className="text-muted">By {props.author==null?"Unknown":props.author} on {new Date(props.publishedAt).toLocaleDateString()}</small></p> */}
                {/* <a href={props.url} target="_blank"  rel="noreferrer"  className="btn btn-sm  btn-dark sm"></a> */}
            </div>
      </div>
  )
}