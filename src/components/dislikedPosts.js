import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "./postContext";
import Post from "./post";

const DislikedPosts = () => {
  const { dislikedPostsState } = useContext(PostContext);
  const [dislikedPosts] = dislikedPostsState;

  return (
    <>
      <Link to="/" className="btn btn-lg c-btn d-block w-25 mx-auto mb-5">
        Go Back
      </Link>
      <div className="container">
        {dislikedPosts.length > 0 ? (
          dislikedPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <div className="c-form h-25 w-25 text-center">
            <p className="fs-5">No Disiked Posts</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DislikedPosts;
