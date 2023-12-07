import "./App.css";
import React from "react";
import { Post } from "../src/components/post";
import { useState, useEffect } from "react";

function App() {
  const [todoList, settodoList] = useState([]);
  useEffect(() => {
    // setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((loadedData) => loadedData.json())
      .then((loadedToDo) => {
        settodoList(loadedToDo);
        console.log(loadedToDo);
      });
    // .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Post products={todoList} />
      <p className="AppFooter"></p>
    </div>
  );
}

export default App;
