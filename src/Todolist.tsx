import React, {ChangeEvent} from 'react';

type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (taskId: string) => void
	changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {
	return <div>
		<h3>{props.title}</h3>
		<ul>
			{
				props.tasks.map(t => {
					const onClickHandler = () => props.removeTask(t.id)
					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
						props.changeTaskStatus(t.id, e.currentTarget.checked)}
					return <li key={t.id} className={t.isDone ? "is-done" : ""}>
						<input type="checkbox"
							   checked={t.isDone}
							   onChange={onChangeHandler}
						/>
						<span>{t.title}</span>
						<button onClick={onClickHandler}>x</button>
					</li>
				})
			}
		</ul>
	</div>
}


// MEDIUM LEVEL
//import React, {ChangeEvent} from 'react';
//
// export type TaskType = {
// 	id: string
// 	title: string
// 	isDone: boolean
// }
//
// type PropsType = {
// 	todolistID: string
// 	title: string
// 	tasks: Array<TaskType>
// 	removeTask: (todolistID: string, taskID: string) => void
// 	changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
// }
//
// export function Todolist(props: PropsType) {
// 	return <div>
// 		<h3>
// 			{props.title}
// 		</h3>
//
// 		<ul>
// 			{
// 				props.tasks.map(t => {
// 					const onClickHandler = () => props.removeTask(props.todolistID, t.id)
// 					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 						props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
// 					}
//
// 					return <li key={t.id} className={t.isDone ? "is-done" : ""}>
// 						<input type="checkbox"
// 							   onChange={onChangeHandler}
// 							   checked={t.isDone}/>
// 						<span>{t.title}</span>
// 						<button onClick={onClickHandler}>x</button>
// 					</li>
// 				})
// 			}
// 		</ul>
// 	</div>
// }