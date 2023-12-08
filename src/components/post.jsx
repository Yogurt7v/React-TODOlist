
import style from "./post.module.css"

export const Post =({task, deletePost, index, edit})=>{
	return (
		
				<div className={style.postWrapper}>
					<span className={style.postTitle}>{task.task}</span>
					<div className={style.postButtons}>
						<button onClick={() => edit(task.id)}>Edit</button>
						<button onClick={() => deletePost(task.id)}>Delete</button>
					</div>
				</div>
			)
}

export default Post