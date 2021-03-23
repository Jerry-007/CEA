import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/posts";
import CreatePost from "./components/createPost";
import EditPost from "./components/editPost";
import LikedPosts from "./components/likedPosts";
import DislikedPosts from "./components/dislikedPosts";
import { PostProvider } from "./components/postContext";

function App() {
  return (
    <PostProvider>
      <Router>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/create" exact>
          <CreatePost />
        </Route>
        <Route path="/editpost/:id" exact>
          <EditPost />
        </Route>
        <Route path="/likedposts" exact>
          <LikedPosts />
        </Route>
        <Route path="/dislikedposts" exact>
          <DislikedPosts />
        </Route>
      </Router>
    </PostProvider>
  );
}

export default App;
