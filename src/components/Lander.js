import React from 'react'
// import download from "./download.jpeg"
export default function Lander() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ display:"flex",justifyContent:"center"}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      {/* <img className="d-block w-100" src={download} alt="First slide" /> */}
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.RDaeMMJeagToxXjkbfDQGwHaEJ?pid=ImgDet&rs=1" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      {/* <img className="d-block w-100" src={download} alt="Third slide"/> */}
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      
    </>
  )
}
