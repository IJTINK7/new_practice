// EASY LEVEL

import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
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
    //setTasks()
  }

  function changeTaskStatus(taskId: string, isDone: boolean) {
    //setTasks()
  }

  return (
      <div className="App">
        <Todolist title="What to learn"
                  tasks={tasks}
                  removeTask={removeTask}
                  changeTaskStatus={changeTaskStatus}
        />
      </div>
  );
}

export default App;


// MEDIUM LEVEL
//
// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
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
//
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
//     //setTasks();
//   }
//
//   function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
//     //setTasks()
//   }
//
//   return (
//       <div className="App">
//         {todolists.map(el => {
//           let tasksForTodolist = tasks[el.id];
//           return <Todolist
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

// HARD LEVEL
//
// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
// type TodolistsType = { id: string, title: string }
// type TasksStateType = {
//   [key: string]: EntryPointType;
// }
// type InCaseType = {
//   data: Array<TaskType>;
//   filter: FilterValuesType;
// }
// type EntryPointType = {
//   entryPoint: InCaseType;
//   hello: string
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
//         filter: "all"
//       },
//       hello: "hello"
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
//         filter: "all"
//       },
//       hello: "hello"
//     },
//   });
//
//   function removeTask(todolistId: string, taskId: string) {
//     //setTasks()
//   }
//
//   function changeTaskStatus(todolistId: string, taskId: string, newIsDone: boolean) {
//     //setTasks()
//   }
//
//   return (
//       <div className="App">
//         {todolists.map((el) => {
//           let tasksForTodolist = tasks[el.id].entryPoint.data;
//           return (
//               <Todolist
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