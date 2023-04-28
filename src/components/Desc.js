import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  startAfter,
  doc,
  startAt,
} from "firebase/firestore";
import Newsitem from "./Newsitem";
import styler from "./Desc.module.css";
import { Route, Routes } from "react-router-dom";
import Post from "./Post";

export default function Desc({formvis,setPostsToRender,PostsToRender}) {
  const [posts, setposts] = useState([]);
  const PostsRef = collection(db, "Number");
  const [isShown, setIsShown] = useState(false);

  const [click, setclick] = useState(0);

  let limiter = 4;

  const handleNextClick = () => {
    // if (click==0)setclick(click+3);
    // else {
    // console.log(posts);
    let arr = [];
    for (
      let i = click + limiter;
      i < Math.min(posts.length, click + 2 * limiter);
      i++
    )
      arr.push(posts[i]);
    // arr.reverse();
    setPostsToRender(arr);
    setclick(click + limiter);
    // }
  };

  const handlePrevClick = () => {
    // if (click==0)setclick(click+3);
    // else {
    console.log(click);
    let arr = [];
    for (let i = click - 1; i >= Math.max(0, click - 2 * limiter); i--)
      arr.push(posts[i]);
    arr.reverse();
    // console.log(click);
    setPostsToRender(arr);

    setclick(click - limiter);
    // }
  };
  const handlefirstClick = () => {
    //   // console.log(posts);
    // let arr = [];
    // for(let i=click;i<Math.min(posts.length,click+limiter);i++) arr.push(posts[i]);
    // // arr.reverse();
    // setPostsToRender(arr);
    //     // setclick(click+3);
  };

  // if (click==0)
  // {
  //   let arr = [];
  //   for(let i=click;i<Math.min(posts.length,click+1);i++) arr.push(posts[i]);
  //   setPostsToRender(arr);
  //   setclick(click+2);
  // }
  const getPostsList = async () => {
    try {
      // const lastVisible = db!=null && db.docs!=null && console.log(db.docs[db.docs.length - 1]);
      // console.log(db);
      // Query.
      //  query = db
      //   .orderBy('email')
      //   .startAfter(lastVisible)
      //   .limit(usersPerPage)
      // const first = query(collection(db, "Number"), orderBy("createdAt"),limit(1));
      // const documentSnapshots = await getDocs(first);

      // // Get the last visible document
      // const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      // console.log("last", lastVisible);

      // Construct a new query starting at this document,
      // get the next 25 cities.
      // const q = query(collection(db, "Number"),
      //     orderBy("createdAt"),
      //     startAfter(lastVisible),
      //     limit(1));

      // const docSnap = await getDocs(doc(PostsRef, posts[0]));
      // const query = ref.orderBy(field).limit(pageSize);

      const q = query(PostsRef, orderBy("createdAt", "desc"), limit(100));

      const data = await getDocs(q);

      // console.log(data);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setposts(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  // const nextPage = (last) => {

  //     return ref.orderBy(field)
  //           .startAfter(last[field])
  //           .limit(pageSize);

  // }
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Batch, setBatch] = useState("");
  const [url, seturl] = useState("");
  const [Stipend, setStipend] = useState("");
  const [ApplyLink, setApplyLink] = useState("");
  const [Author, setAuthor] = useState("");

  const createmessage = async (e) => {
    if (Author === "okaba") {
      e.preventDefault();
      //   setinputer("");
      const ans = new Date().toLocaleString();
      try {
        await addDoc(PostsRef, {
          createdAt: ans,
          Description: Description,
          url: url,
          Batch: Batch,
          Stipend: Stipend,
          ApplyLink: ApplyLink,
          Title: Title,
          // userId: auth?.currentUser?.uid,
        });

        setApplyLink("");
        setBatch("");
        setDescription("");
        setStipend("");
        setTitle("");
        seturl("");
        getPostsList();
        // getMovieList();
      } catch (err) {
        console.error(err);
      }
    }
  };

  // useEffect(() => {
  //   getPostsList();
  // }, []);

  // if (click==0)
  // {
  //   await  getPostsList();

  // }
  // const handleFirstClick =  () => {
  //   // await{
  //      let arr = [];
  //     console.log(posts);
  //     for(let i=click;i<Math.min(posts.length,click+limiter);i++) arr.push(posts[i]);
  //     arr.reverse();
  //     setPostsToRender(arr);

  //   // }
  // }
  useEffect(() => {
    let arr = [];
    console.log(posts);
    for (let i = click; i < Math.min(posts.length, click + limiter); i++)
      arr.push(posts[i]);
    // arr.reverse();
    setPostsToRender(arr);
  }, [posts]);

  useEffect(() => {
    getPostsList();
    // handleFirstClick();
    // let arr = [];
    // console.log(posts);
    // for(let i=click;i<Math.min(posts.length,click+limiter);i++) arr.push(posts[i]);
    // arr.reverse();
    // setPostsToRender(arr);
    // setclick(click+3);
    // handleNextClick();
    // setclick(click+3);
  }, []);

  // useEffect(() => {
  // getPostsList();
  // handleClick();
  // setclick(click+3);
  // }, []);

  // console.log(posts);
  const handletitlechange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handledescchange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const handlestichange = (e) => {
    e.preventDefault();
    setStipend(e.target.value);
  };
  const handlebatchchange = (e) => {
    e.preventDefault();
    setBatch(e.target.value);
  };

  const handleurlchange = (e) => {
    e.preventDefault();
    seturl(e.target.value);
  };

  const handlelinkchange = (e) => {
    e.preventDefault();
    setApplyLink(e.target.value);
  };
  const handleAuthorchange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  let ind = 0;
// console.log(PostsToRender,111);
  return (
    <div>
      {formvis == 1 ? (
        <form
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            margin: "5%",
          }}
          onSubmit={createmessage}
        >
          <input
            placeholder="Title"
            name="Title"
            value={Title}
            onChange={handletitlechange}
            type="text"
            style={{ margin: "1%" }}
          />
          <input
            placeholder="Description"
            name="Description"
            onChange={handledescchange}
            value={Description}
            type="text"
            style={{ margin: "1%" }}
          />
          <input
            placeholder="Batch"
            name="Batch"
            onChange={handlebatchchange}
            value={Batch}
            type="text"
            style={{ margin: "1%" }}
          />
          <input
            placeholder="Stipend"
            name="Stipend"
            onChange={handlestichange}
            value={Stipend}
            type="text"
            style={{ margin: "1%" }}
          />
          <input
            placeholder="Logo Url"
            name="url"
            onChange={handleurlchange}
            value={url}
            type="text"
            style={{ margin: "1%" }}
          />
          <input
            placeholder="ApplyLink"
            name="ApplyLink"
            onChange={handlelinkchange}
            value={ApplyLink}
            type="text"
            style={{ margin: "1%" }}
          />
          <input
            placeholder="Author"
            name="Author"
            onChange={handleAuthorchange}
            value={Author}
            type="text"
            style={{ margin: "1%" }}
          />

          <button className="btn-primary" style={{ padding: "4px" }}>
            Submit
          </button>
        </form>
      ) : (
        ""
      )}
      {/* <hr></hr> */}
      <div
        className="d-flex flex-wrap my-5"
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5%",
        }}
      >
        {/* element:hover {
  transform: scale(1.5); 
} */}
        {/* <h1 style={{display:"flex",justifyContent:"center"}}>Job Oppurtunities</h1> */}
        {PostsToRender != null &&
          PostsToRender.map((ele) => {
            return (
              <div
                className={styler.element}
                style={{ margin: "2%" }}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {/* <Routes>
                <Route path={ele.Title} element={<Post/>}></Route>
              </Routes> */}
                <Newsitem
                  valr={ind}
                  id={ind}
                  key={ind}
                  url={ele.url}
                  title={ele.Title}
                  desc={ele.Description}
                  ApplyLink={ele.ApplyLink}
                  Batch={ele.Batch}
                  stipend={ele.Stipend}
                  createdAt={ele.createdAt}
                  setposts={setposts}
                />
                {ind++}
              </div>
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "2%",
        }}
      >
        {/* {console.log(click)} */}
        <button
          onClick={handlePrevClick}
          style={{ borderRadius: "6px", padding: "4px" }}
          disabled={click <= 0 ? true : false}
        >
          ⬅️ Prev Page
        </button>
        <button
          onClick={handleNextClick}
          style={{ borderRadius: "6px", padding: "4px" }}
          disabled={click > posts.length - limiter ? true : false}
        >
          {" "}
          Next Page ➡️{" "}
        </button>
      </div>
    </div>
  );
}
