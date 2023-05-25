import React from 'react';

export function Todolist() {
	return <div>
		Hello
	</div>
}

//10
//import React from 'react';
//
// type TaskType = {
// 	id: string
// 	title: string
// 	isDone: boolean
// }
//
// type PropsType = {
// 	title: string
// 	tasks: Array<TaskType>
// 	removeTask: (taskId: string) => void
// }
//
// export function Todolist(props: PropsType) {
// 	return <div>
// 		<h3>{props.title}</h3>
// 		<ul>
// 			{
// 				props.tasks.map(t => {
// 					const onClickHandler = () => props.removeTask(t.id)
// 					return <li key={t.id} className={t.isDone ? "is-done" : ""}>
// 						<input type="checkbox"
// 							   checked={t.isDone}/>
// 						<span>{t.title}</span>
// 						<button onClick={onClickHandler}>x</button>
// 					</li>
// 				})
// 			}
// 		</ul>
// 	</div>
// }