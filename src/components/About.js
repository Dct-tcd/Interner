import React from 'react'

export default function About() {
  return (
    <>
      
      <h1 style={{textAlign:"center", padding:"2%",marginTop:"5%",color:"beige",fontSize:"large" }}>About us</h1>
    <div style={{display:"flex",justifyContent:"center"}}> 
        
    <div className="diver" id="diver">

      At Interner , We Post Regular updates on internships and Job postings in  software development field.

Our vision is to empower the youth of our nation and make them Atmanirbhar . By providing them with all kinds of opportunities from various sectors, sharing knowledge and make them competent enough so that they could excel in any field.
    </div>
    </div>
    <div style={{display:"flex",color:"voilet" ,justifyContent:"center",marginBottom:"50px"}}> 

  <a style={{ color: "inherit",marginTop:"1%",
  textDecoration: "inherit" , color:"lightblue",alignContent:"center"}}
  href="https://dsa-tracker-by-devtiwari.netlify.app/"
  target="_blank"
  >Practise Your  DSA Skills Here 👈</a>

     </div>
    </>
  )
}
