import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  addDoc,
} from "firebase/firestore";
import Newsitem from "./Newsitem";

export default function Desc(props) {
  const [posts, setposts] = useState([]);
  const PostsRef = collection(db, "Number");

  const getPostsList = async () => {
    try {
      const q = query(PostsRef, orderBy("createdAt", "desc"), limit(30));
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setposts(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

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

  useEffect(() => {
    getPostsList();
  }, []);

  console.log(posts);
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
  return (
    <div>
     {props.formvis==1? <form
        style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly", margin: "5%" }}
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

        <button className="btn-primary" style={{padding:"4px",}}>Submit</button>
      </form>:""}

      <div className="d-flex justifyContent-center  flex-wrap my-3" style={{display:"flex",justifyContent:"center"}}>
        {posts.map((ele) => {
          return (
            <div className="m-4">
              <Newsitem
                url={ele.url}
                title={ele.Title}
                desc={ele.Description}
                ApplyLink={ele.ApplyLink}
                Batch={ele.Batch}
                stipend={ele.Stipend}
                createdAt={ele.createdAt}
                setposts={setposts}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
