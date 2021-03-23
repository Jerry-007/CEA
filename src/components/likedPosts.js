import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "./postContext";
import Post from "./post";

const LikedPosts = () => {
  const { likedPostsState } = useContext(PostContext);
  const [likedPosts] = likedPostsState;

  return (
    <>
      <Link to="/" className="btn btn-lg c-btn d-block w-25 mx-auto mb-5">
        Go Back
      </Link>
      <div className="container">
        {likedPosts.length > 0 ? (
          likedPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <div className="c-form h-25 w-25 text-center">
            <p className="fs-5">No Liked Posts</p>
          </div>
        )}
      </div>
    </>
  );
};

export default LikedPosts;
