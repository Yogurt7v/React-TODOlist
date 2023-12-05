// import { useState } from "react"
import style from "./post.module.css"

export const Post =({array})=>{
	return (
		// <div className={style.postWrapper}>
		// 	<input type="text" placeholder="Добавить новое дело"/>
		// 	<div className={style.postButtons}>
		// 		<button>Post</button>
		// 		<button>Edit</button>
		// 		<button>Delete</button>
		// 	</div>

		// </div>

		array.map((item)=>{
			return (
				<div className={style.postWrapper}>
					<p>{item.text}</p>
					<div className={style.postButtons}>
						<button>Post</button>
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>
			)
		})
	)
}

export default Post