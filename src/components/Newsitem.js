import React, { useState } from "react";
import Descriptioner from "./Descriptioner";
// import alt from "./public/alt.png";
export default function Newsitem(props) {
  // useState
  const [toggle, settoggle] = useState(0);

  const handleDate = (str) => {
    str = str.toString();
    let arr = str.split(",");
    // console.log(arr);
    return arr[0];
  };

  const handleDivClick = () => {
    // prompt("1");

    //  props.setposts([]);

    if (toggle == 0) settoggle(1);
    else settoggle(0);

    // prompt("2");
  };
  let col = ["cornsilk", "#e6ffff"];
  return (
    <div className="container my-3 md-4 m-4">
      <div
        className="card"
        style={{
          width: "18rem",
          backgroundColor: `${col[props.valr % 2]}`,
          borderRadius: "5px",
          // boxShadow: "initial",
          // cursor:"pointer"
        }}
        onClick={handleDivClick}
      >
        <img
          src={
            props.url == null
              ? "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
              : props.url
          }
          className="card-img-top"
          style={{ Width: "60px", height: "200px" }}
        />
        <div
          className="card-body"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <hr></hr>
          <h3 className="card-title" style={{ color: "purple" }}>
            {props.title}
          </h3>
        </div>
        <p className="card-text" style={{ color: "grey" }}>
          &nbsp; Batch : {props.Batch}
        </p>

        {/* <div style={{color:"grey",display:"flex",justifyContent:"center"}}> */}

        <p className="card-text" style={{ color: "grey" }}>
          &nbsp; Date : {handleDate(props.createdAt)}
        </p>
        {/* </div>           */}
        <p className="card-text" style={{ color: "grey" }}>
          &nbsp; Stipend : {props.stipend}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a target="_blank" href={`${props.ApplyLink}`}>
            {" "}
            Apply Here{" "}
          </a>
          <a>👍🍀</a>
        </div>
        <Descriptioner desc={props.desc} title={props.Title} vis={toggle} />
      </div>
    </div>
  );
}
