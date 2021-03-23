import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [dislikedPosts, setDislikedPosts] = useState([]);

  const deleteLikedPost = (id) => {
    setLikedPosts((likedPosts) =>
      likedPosts.filter((likedPost) => likedPost.id !== id)
    );
  };

  const deleteDislikedPost = (id) => {
    setDislikedPosts((dislikedPosts) =>
      dislikedPosts.filter((dislikedPost) => dislikedPost.id !== id)
    );
  };

  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPosts((posts) => posts.filter((post) => post.id !== id));
    deleteLikedPost(id);
    deleteDislikedPost(id);
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    getPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        postsState: [posts, setPosts],
        likedPostsState: [likedPosts, setLikedPosts],
        dislikedPostsState: [dislikedPosts, setDislikedPosts],
        deletePost: deletePost,
        deleteLikedPost: deleteLikedPost,
        deleteDislikedPost: deleteDislikedPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
