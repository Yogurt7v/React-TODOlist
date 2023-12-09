import style from "./search.module.css"
import { useState } from "react"

export const Search = ({todoList, searchVisble}) => {
	const [search, setSearch] = useState('')

	const startSearch = (event)=>{
		setSearch(event.target.value);
	}
	const foundSearch = todoList.find((item) => item.task === search);
	const message = foundSearch ? 'Такое дело уже есть' : '';

	return (
		<div className={style.search}>
			{searchVisble === true ? (
   			<input type="text" placeholder="Поиск" onChange={startSearch}/>

			) : ""}
			{searchVisble === true? message : ""}
		</div>
	)
}