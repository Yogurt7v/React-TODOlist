// import { useState } from "react"
import style from "./post.module.css"

export const Post =()=>{
	return (
		<div className={style.postWrapper}>
			<input type="text" placeholder="Добавить новое дело"/>
			<div className={style.postButtons}>
				<button>Send</button>
				<button>Edit</button>
				<button>Delete</button>
			</div>

		</div>
	)
}

export default Post