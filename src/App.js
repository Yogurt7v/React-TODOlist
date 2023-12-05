import "./App.css";
import React from "react";
import { Post } from "../src/components/post";

const test = [
  {
    id: 1,
    text: "test",
  },
  {
    id: 2,
    text: "test2",
  },
  {
    id: 3,
    text: "test3",
  },
  {
    id: 4,
    text: "test4",
  },
];

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Post array={test} />
      <p className="AppFooter"></p>
    </div>
  );
}

export default App;
