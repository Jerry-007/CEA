import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "./postContext";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { postsState } = useContext(PostContext);
  const [posts, setPosts] = postsState;

  const Submitted = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      userId: 333,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );

    setPosts([res.data, ...posts]);

    alert(`${newPost.title} , added`);
    setTitle("");
    setBody("");
  };

  return (
    <form className="c-form" onSubmit={Submitted}>
      <h3 className="text-center mb-3">Create a Post</h3>
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

export default CreatePost;
