// // EASY LEVEL
import React, {useState} from 'react';
import './App.css';
import {WishList} from './WishList';
import {v1} from 'uuid';

function App() {

	let [tasks, setTasks] = useState([
		{id: v1(), title: "HTML&CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "ReactJS", isDone: false},
		{id: v1(), title: "Rest API", isDone: false},
		{id: v1(), title: "GraphQL", isDone: false},
	]);

	function removeTask(taskID: string) {
		setTasks(tasks.filter(el=> el.id !==taskID))
	}

	function changeTaskStatus(taskId: string, isDone: boolean) {
		setTasks(tasks.map(el=>el.id === taskId ? {...el, isDone} : el))
	}

	return (
		<div className="App">
			<WishList title="What to learn"
					  tasks={tasks}
					  removeTask={removeTask}
					  changeTaskStatus={changeTaskStatus}
			/>
		</div>
	);
}

export default App;


// // MEDIUM LEVEL

// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, WishList} from './WishList';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// type TodolistsType = {
//   id: string;
//   title: string;
//   filter: FilterValuesType;
// }
// type TasksType = {
//   [key: string]: Array<TaskType>
// }
//
// function App() {
//   let todolistID1 = v1()
//   let todolistID2 = v1()
//
//   let [todolists, setTodolists] = useState<Array<TodolistsType>>([
//     {id: todolistID1, title: "What to learn", filter: "all"},
//     {id: todolistID2, title: "What to buy", filter: "all"},
//   ])
//
//   let [tasks, setTasks] = useState<TasksType>({
//     [todolistID1]: [
//       {id: v1(), title: 'HTML&CSS', isDone: true},
//       {id: v1(), title: 'JS', isDone: true},
//       {id: v1(), title: 'ReactJS', isDone: false},
//       {id: v1(), title: 'Rest API', isDone: false},
//       {id: v1(), title: 'Graph SQL', isDone: false},
//     ],
//     [todolistID2]: [
//       {id: v1(), title: 'Milk', isDone: true},
//       {id: v1(), title: 'Fruits', isDone: true},
//       {id: v1(), title: 'Nuts', isDone: true},
//       {id: v1(), title: 'Bread', isDone: false},
//       {id: v1(), title: 'Sugar', isDone: false},
//     ]
//   })
//
//   function removeTask(todolistID: string, taskID: string) {
// 	  setTasks({...tasks,[todolistID]:tasks[todolistID].filter(el=>el.id !== taskID) })
//   }
//
//   function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
//       setTasks({...tasks, [todolistID]:tasks[todolistID].map(el=> el.id === taskId ? {...el, isDone} : el )})
//   }
//
//   return (
//       <div className="App">
//         {todolists.map(el => {
//           let tasksForTodolist = tasks[el.id];
//           return <WishList
//               key={el.id}
//               todolistID={el.id}
//               title={el.title}
//               tasks={tasksForTodolist}
//               removeTask={removeTask}
//               changeTaskStatus={changeStatus}
//           />
//         })}
//       </div>
//   );
// }
//
// export default App;

// // HARD LEVEL
//
// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, WishList} from './WishList';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
// type TodolistsType = { id: string, title: string }
// type TasksStateType = {
//   [key: string]: InCaseType;
// }
// type EntryPointType = {
//   data: Array<TaskType>;
//   filter: FilterValuesType;
// }
// type InCaseType = {
//   entryPoint: EntryPointType;
//   completed: boolean
// }
//
// function App() {
//
//   let todolistId1 = v1();
//   let todolistId2 = v1();
//
//   let [todolists, setTodolists] = useState<Array<TodolistsType>>([
//     {id: todolistId1, title: "What to learn"},
//     {id: todolistId2, title: "What to buy"}
//   ])
//
//   let [tasks, setTasks] = useState<TasksStateType>({
//     [todolistId1]: {
//       entryPoint: {
//         data: [
//           {id: v1(), title: 'HTML&CSS', isDone: true},
//           {id: v1(), title: 'JS', isDone: true},
//           {id: v1(), title: 'ReactJS', isDone: false},
//           {id: v1(), title: 'Rest API', isDone: false},
//           {id: v1(), title: 'Graph SQL', isDone: false},
//         ],
//         filter: "all",
//       },
//       completed: true
//     },
//     [todolistId2]: {
//       entryPoint: {
//         data: [
//           {id: v1(), title: 'Milk', isDone: true},
//           {id: v1(), title: 'Fruits', isDone: true},
//           {id: v1(), title: 'Nuts', isDone: true},
//           {id: v1(), title: 'Bread', isDone: false},
//           {id: v1(), title: 'Sugar', isDone: false},
//         ],
//         filter: "all",
//       },
//       completed: true,
//     },
//   });
//   function removeTask(todolistId: string, taskId: string) {
//     setTasks({...tasks, [todolistId]: {...tasks[todolistId], entryPoint: {...tasks[todolistId].entryPoint, data:
//     tasks[todolistId].entryPoint.data.filter(el=>el.id !== taskId )
//     } } })
//   }
//
//   function changeTaskStatus(todolistId: string, taskId: string, newIsDone: boolean) {
//     setTasks({...tasks, [todolistId]: {...tasks[todolistId], entryPoint: {...tasks[todolistId].entryPoint, data:
//        tasks[todolistId].entryPoint.data.map(el => el.id === taskId ? {...el, isDone: newIsDone} : el )
//     }}})
//   }
//
//   return (
//       <div className="App">
//         {todolists.map((el) => {
//           let tasksForTodolist = tasks[el.id].entryPoint.data;
//           return (
//               <WishList
//                   key={el.id}
//                   todolistID={el.id}
//                   title={el.title}
//                   tasks={tasksForTodolist}
//                   removeTask={removeTask}
//                   changeTaskStatus={changeTaskStatus}
//               />
//           )
//         })}
//       </div>
//   );
// }
//
// export default App;


// WishList 07
//
// import React, {useState} from 'react';
// import './App.css';
// import {OsTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
// import {v1} from "uuid";
//
// export type OsType = "All" | "iOS" | "Android" | OsTypeForSelect
//
// export type WishesDataPropsType = {
// 	id: string
// 	title: string
// 	OS: OsType
// 	checked: boolean
// }
//
// function App() {
// 	const [activityFilter, setActivityFilter] = useState<StatusTypeForSelect>("All")
// 	const [osFilter, setOsFilter] = useState<OsType>("All")
// 	const [wishes, setWishes] = useState<WishesDataPropsType[]>([
// 		{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
// 		{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
// 		{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
// 		{id: v1(), title: 'Huawei', OS: "Android", checked: false},
// 		{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
// 	])
//
// 	const addNewWish = (oS: OsTypeForSelect, newValue: string) => {
// 		setWishes([{id: v1(), title: newValue, OS: oS, checked: false}, ...wishes])
// 	}
// 	const removeWish = (id: string) => {
// 		setWishes(wishes.filter(el => el.id !== id))
// 	}
//
// 	//{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true, isTrue: statusValue }
// 	//1. Видишь объект-делай копию. 2. Видишь массив-делай копию. 3. Видишь ключ-создавай новый.
//
// 	const changeWishStatus = (wishId: string, statusValue: boolean) => {
// 		setWishes(wishes.map((el)=> el.id === wishId ? {...el, checked: statusValue} :el))
// 	}
//
//
//
//
// 	const wishesWhatWeWantToSee = (osFilter === "All" ? wishes : wishes.filter(el => el.OS === osFilter)) // select OS
//
//
// 	const wishesWhatWeWantToSeeGeneral = activityFilter === "All" ?
// 		wishesWhatWeWantToSee : activityFilter === "Active" ?
// 		wishesWhatWeWantToSee.filter(el=> !el.checked )
// 		: wishesWhatWeWantToSee.filter(el=> el.checked )
// 	// select Activity
//
//
//
// 	return (
// 		<div className="App">
// 			<WishList wishes={wishesWhatWeWantToSeeGeneral}
// 					  addNewWish={addNewWish}
// 					  osFilter={osFilter}
// 					  setOsFilter={setOsFilter}
// 					  removeWish={removeWish}
// 					  activityFilter={activityFilter}
// 					  setActivityFilter={setActivityFilter}
// 					  changeWishStatus={changeWishStatus}
//
//
// 			/>
// 		</div>
// 	);
// }
//
// export default App;