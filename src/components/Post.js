import React, { useEffect, useState } from "react";
import { useLocation, useParams , Link } from "react-router-dom";
// useLocation

const Post = (props) => {
  const { id } = useParams();
const [val, setval] = useState("none");

  const handlemouseenter = () => {
    console.log("enter");
            setval("hover");
  }
  const handlemouseout = () => {
            setval("none");
  }
  // const {state} = useLocation();
  // useEffect(() => {
  //   setData(props.PostsToRender);
  // }, [props.PostsToRender]);

  // console.log(props.PostsToRender);
  // console.log(props.PostsToRender[id].Description);

  return (
    // <>
    // </>
    // <div style={{color:"red"}}>{props.PostsToRender[id].Description}</div>
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <h1 style={{ color: "white" }}>
          {props.PostsToRender[id].Description}
        </h1>
        {console.log(props.PostsToRender)}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "12%",
          marginRight: "12%",
          marginTop: "8%",
          textAlign: "center",
        }}
      >
        <h6 style={{ color: "darkgray" }}>
          {props.PostsToRender[id].OrgDescription}
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "12%",
          marginRight: "12%",
          marginTop: "8%",
          textAlign: "center",
        }}
      >
      </div>
        <div style={{marginLeft:"12%"}}>

        <h6 style={{ color: "beige",marginTop: "2%" }}>
          Compensation : {props.PostsToRender[id].Stipend}
        </h6>
        
        <h6 style={{ color: "beige",marginTop: "2%" }}>
          Eligibile : {props.PostsToRender[id].Batch}
        </h6>
        
        <h6 style={{ color: "beige",marginTop: "2%" }}>
          Location : {props.PostsToRender[id].Location}
        </h6>
        
        <h6 style={{ color: "biege",marginTop: "2%" }}>
           <Link to={props.PostsToRender[id].ApplyLink} 
           
           style={{color:"#fec771",
           textDecorationLine:` ${val=="hover"? "underline" : "none" }`,
          }}
           onMouseEnter={handlemouseenter} onMouseLeave={handlemouseout} target="_blank">Apply Link </Link>
        </h6>
        </div>
    </div>
  );
};

export default Post;
