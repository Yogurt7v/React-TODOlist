// import { useState } from "react"
import style from "./post.module.css"

export const Post =({products})=>{
	return (

		products.map((item)=>{
			return (
				<div className={style.postWrapper}>
					<span className={style.postTitle}>{item.title}</span>
					{/* <div className={style.postButtons}>
						<button>Post</button>
						<button>Edit</button>
						<button>Delete</button>
					</div> */}
				</div>
			)
		})
	)
}

export default Post