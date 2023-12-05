import "./App.css";
import React from "react";
import { Post } from "../src/components/post";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Post />
    </div>
  );
}

export default App;
