import "./App.css";
import Desc from "./components/Desc";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./components/About";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import { useEffect } from "react";
function App() {
  const [Form, setForm] = useState(0);
  const [PostsToRender, setPostsToRender] = useState([]);
 
  console.log(PostsToRender);

  return (
    <div>
      <Navbar Form={Form} setForm={setForm} divId={"diver"} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Desc
                formvis={Form}
                PostsToRender={PostsToRender}
                setPostsToRender={setPostsToRender}
              />
            }
          ></Route>
          <Route
            path="/:id"
            element={<Post PostsToRender={PostsToRender} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <About />
    </div>
  );
}

export default App;
