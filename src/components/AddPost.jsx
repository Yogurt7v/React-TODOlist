import React from "react";
import { useState } from "react";
import style from "./addposts.module.css";
export const AddPost =({create}) => {
	const [newTask, setNewTask] = useState();

	const handleChange = (event) => {
		setNewTask(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newTask) {
			alert('Задача не может быть пустой');
			return;
		}
		create(newTask);
		setNewTask('');
	}

	return (
		<form className={style.allPostsForm} onSubmit={handleSubmit}>
			<input type="text" placeholder="Новая задача" className={style.allPostsInput} onChange={handleChange} value={newTask}/>
			<button>Добавить</button>
		</form>
	);
}
