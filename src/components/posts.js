import { Link } from "react-router-dom";
import { PostContext } from "./postContext";
import { useContext } from "react";
import Post from "./post";

const Posts = () => {
  const { postsState } = useContext(PostContext);
  const [posts] = postsState;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-evenly mb-5">
        <Link to="/create" className="btn btn-lg c-btn">
          Create a Post
        </Link>
        <Link to="/likedposts" className="btn btn-lg c-btn">
          Liked Posts
        </Link>
        <Link to="/dislikedposts" className="btn btn-lg c-btn">
          Disliked Posts
        </Link>
      </div>
      <div className="container">
        {posts.length > 0
          ? posts.map((post) => <Post key={post.id} post={post} />)
          : "Nonthing to show"}
      </div>
    </div>
  );
};

export default Posts;
