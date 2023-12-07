import "./App.css";
import React from "react";
import { AddPost } from "./components/AddPost";
import { useState, useEffect } from "react";
import Post from "./components/Post";

function App() {
  const [todoList, setTodoList] = useState([]);

  const create = (todo) => {
    setTodoList([
      ...todoList,
      { id: Math.floor(Math.random() * 10000000), task: todo },
    ]);
  };
  const edit = (i) => {
    console.log(todoList[i].task);
    setTodoList([
      (todoList[i] = {
        id: todoList[i].id,
        task: prompt("Enter new task"),
      }),
    ]);
  };

  const deletePost = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddPost create={create} />
      {todoList.map((todo, index) => (
        <Post task={todo} index={index} deletePost={deletePost} edit={edit} />
      ))}
      <p className="AppFooter"></p>
    </div>
  );
}

export default App;
