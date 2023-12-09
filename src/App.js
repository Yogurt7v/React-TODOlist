import "./App.css";
import React from "react";
import { AddPost } from "./components/AddPost";
import { useState, useEffect } from "react";
import Post from "./components/Post";
import { Search } from "./components/Search";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchVisble, setSearchVisble] = useState(false);
  const [sortedList, setSortedList] = useState(false);
  const [prevTodo, setPrevTodo] = useState([...todoList]);

  useEffect(() => {
    fetch("http://localhost:3004/todo")
      .then((loadedData) => loadedData.json())
      .then((loadedToDos) => {
        setTodoList(loadedToDos);
      });
  }, []);

  const create = (todo) => {
    let id = Math.floor(Math.random() * 10000000);
    fetch("http://localhost:3004/todo/", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: id,
        task: `${todo}`,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setTodoList([...todoList, response]);
      });
  };
  const edit = (i) => {
    let index = todoList.findIndex((el) => el.id === i);
    fetch(`http://localhost:3004/todo/${todoList[index].id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: `${todoList[index].id}`,
        task: prompt("Измените задачу"),
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        todoList[index] = response;
        setTodoList([...todoList]);
      });
  };

  const deletePost = (id) => {
    fetch(`http://localhost:3004/todo/${id}`, {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setTodoList([...todoList]);
        setTodoList(todoList.filter((todo) => todo.id !== id));
      });
  };

  const visible = () => {
    setSearchVisble(!searchVisble);
  };

  const sort = () => {
    setPrevTodo([...todoList]);
    if (!sortedList) {
      console.log("первый вариант");
      const sortedArr = [...todoList].sort((a, b) =>
        a.task.localeCompare(b.task)
      );
      setTodoList([...sortedArr]);
      setSortedList(!sortedList);
    }
    if (sortedList) {
      console.log("второй вариант");
      console.log(prevTodo);
      setTodoList([...prevTodo]);
      setSortedList(!sortedList);
    }
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddPost create={create} />
      <button className="searchButton" onClick={visible}>
        Search
      </button>
      <button className="sortButton" onClick={sort}>
        Sort
      </button>
      <Search todoList={todoList} searchVisble={searchVisble}></Search>
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
