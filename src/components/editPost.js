import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "./postContext";
import axios from "axios";

const EditPost = () => {
  const { postsState } = useContext(PostContext);
  const [posts, setPosts] = postsState;

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === Number(id)) {
        setTitle(posts[i].title);
        setBody(posts[i].body);
        break;
      }
    }
  }, [id, posts]);

  const Submitted = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      userId: 333,
    };
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        newPost
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }

    setPosts((posts) => {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === Number(id)) {
          posts[i].title = title;
          posts[i].body = body;
          break;
        }
      }
      return posts;
    });

    alert(`${newPost.title} , updated`);
    setTitle("");
    setBody("");
  };

  return (
    <form className="c-form" onSubmit={Submitted}>
      <h3 className="text-center mb-3">Update a Post</h3>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          value={title}
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          value={body}
          id="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn c-btn mt-2">
        Submit
      </button>
      <Link to="/" type="button" className="btn c-btn mt-2">
        Go Back
      </Link>
    </form>
  );
};

export default EditPost;
