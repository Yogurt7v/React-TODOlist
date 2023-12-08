import "./App.css";
import React from "react";
import { AddPost } from "./components/AddPost";
import { useState, useEffect } from "react";
import Post from "./components/Post";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/todo")
      .then((loadedData) => loadedData.json())
      .then((loadedToDos) => {
        setTodoList(loadedToDos);
      });
  }, []);

  const create = (todo) => {
    let id = Math.floor(Math.random() * 10000000);
    fetch(`http://localhost:3004/todo/`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: id,
        task: `${todo}`,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Смартфон обновлён, ответ сервера:", response);
        setTodoList([...todoList, response]);
      });
  };
  const edit = (i) => {
    // let newArr = [...todoList];
    let index = todoList.findIndex((el) => el.id === i);
    let id = todoList[index].id;
    let newValue = prompt("Измените задачу");
    console.log(id);
    fetch(`http://localhost:3004/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: id,
        task: newValue,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("полученое значение", response);
        todoList[index] = response;
        setTodoList([...todoList]);
      });
    // setTodoList([a, ...todoList]);
  };

  const deletePost = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddPost create={create} />
      {todoList.map((todo, index) => (
        <Post
          key={todo.id}
          task={todo}
          index={index}
          deletePost={deletePost}
          edit={edit}
        />
      ))}
      <p className="AppFooter"></p>
    </div>
  );
}

export default App;
