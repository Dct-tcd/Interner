import React, { useEffect, useState } from 'react'
import {useLocation, useParams} from "react-router-dom";
// useLocation

const Post = (props) => {
  const {id} = useParams();
  // const {state} = useLocation();
  // useEffect(() => {
  //   setData(props.PostsToRender);
  // }, [props.PostsToRender]);

  // console.log(props.PostsToRender);
  // console.log(props.PostsToRender[id].Description);
  
  return (
    <div style={{color:"red"}}>{props.PostsToRender[id].Description}</div>
  )
}

export default Post