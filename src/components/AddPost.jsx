import React from "react";
import { useState } from "react";
export const AddPost =({create}) => {
	const [newTask, setNewTask] = useState();

	const handleChange = (event) => {
		setNewTask(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		create(newTask);
		setNewTask('');
	}

	return (
		<form className="allPostsForm" onSubmit={handleSubmit}>
			<input type="text" placeholder="Новая задача" className="allPostsInput" onChange={handleChange} value={newTask}/>
			<button className="allPostsButton">Добавить</button>
		</form>
	);
}
