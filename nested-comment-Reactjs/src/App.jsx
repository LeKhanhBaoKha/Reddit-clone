import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PostLists } from "./components/PostLists";
import { PostProvider } from "./contexts/PostContext";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<PostLists />}></Route>
        <Route
          path="/posts/:id"
          element={
            <PostProvider>
              <Post />
            </PostProvider>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
