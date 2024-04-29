import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PostLists } from "./components/PostLists";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<PostLists />}></Route>
        <Route path="/posts/:id" element={null}></Route>
      </Routes>
    </div>
  );
}

export default App;
