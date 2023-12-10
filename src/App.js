import "./App.css";
import React, { useRef } from "react";
import { AddPost } from "./components/AddPost";
import { useState, useEffect } from "react";
import Post from "./components/Post";
import { Search } from "./components/Search";
import { ref, onValue, push, set, remove } from "firebase/database";
import { db } from "./firebase";

function App() {
  const [todoList, setTodoList] = useState({});
  const [searchVisble, setSearchVisble] = useState(false);
  const [sortedList, setSortedList] = useState(false);
  const [prevTodo, setPrevTodo] = useState({ ...todoList });
  const r = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const todoListRef = ref(db, "todo");

    return onValue(todoListRef, (snapshot) => {
      const data = snapshot.val() || {};
      // console.log(Object.values(data));
      setTodoList(data);
      setIsLoading(false);
    });
  }, []);

  const create = (todo) => {
    const todoListRef = ref(db, "todo");

    push(todoListRef, {
      id: Math.floor(Math.random() * 10000000),
      task: `${todo}`,
    });
  };
  const edit = (i) => {
    let index = Object.values(todoList).findIndex((el) => el.id === i);

    const todoListRef = ref(db, `todo/${Object.entries(todoList)[index][0]}`);
    set(todoListRef, {
      id: i,
      task: prompt("Измените задачу"),
    });
  };

  const deletePost = (i) => {
    let index = Object.values(todoList).findIndex((el) => el.id === i);
    const removeListRef = ref(db, `todo/${Object.entries(todoList)[index][0]}`);
    remove(removeListRef);
  };

  const visible = () => {
    setSearchVisble(!searchVisble);
  };

  const sort = () => {
    setPrevTodo({ ...todoList });
    if (!sortedList) {
      let a = JSON.stringify(todoList);
      let sortedObj = JSON.parse(a);

      sortedObj = Object.values(sortedObj).sort((a, b) =>
        a.task.localeCompare(b.task)
      );
      setTodoList(sortedObj);
      setSortedList(!sortedList);
      r.current.style.backgroundColor = "#5986db";
      r.current.style.color = "white";
    }
    if (sortedList) {
      setTodoList({ ...prevTodo });
      setSortedList(!sortedList);
      r.current.style.backgroundColor = "white";
      r.current.style.color = "black";
    }
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddPost create={create} />
      <button className="sortButton" onClick={sort} ref={r}>
        Sort
      </button>
      <button className="searchButton" onClick={visible}>
        Search
      </button>
      <Search todoList={todoList} searchVisble={searchVisble}></Search>
      {isLoading ? (
        <div className="loaderWrapper">
          <div class="loader"></div>
        </div>
      ) : (
        Object.values(todoList).map((todo, index) => (
          <Post
            key={todo.id}
            task={todo}
            index={index}
            deletePost={deletePost}
            edit={edit}
          />
        ))
      )}
      <p className="AppFooter"></p>
    </div>
  );
}

export default App;
