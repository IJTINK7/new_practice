import React from 'react';
import './App.css';


function App() {
  //1
  let man = {
    name: "Valera",
    age: 30,
    profession: "Driver"
  }

  return (
      //1
      <div className="App">
          <div>Hello! My name is <b>{man.name}</b>.</div>
          <div>I am <b>{man.age}</b> years old.</div>
          <div>My profession is a/an <b>{man.profession}.</b></div>
      </div>
  );
}

export default App;



//10

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// function App() {
//
//   let [tasks, setTasks] = useState([
//     {id: v1(), title: "HTML&CSS", isDone: true},
//     {id: v1(), title: "JS", isDone: true},
//     {id: v1(), title: "ReactJS", isDone: false},
//     {id: v1(), title: "Rest API", isDone: false},
//     {id: v1(), title: "GraphQL", isDone: false},
//   ]);
//
//   function removeTask(id: string) {
//     let filteredTasks = tasks.filter(t => t.id !== id);
//     setTasks(filteredTasks);
//   }
//
//   return (
//       <div className="App">
//         <Todolist title="What to learn"
//                   tasks={tasks}
//                   removeTask={removeTask}
//         />
//       </div>
//   );
// }
//
// export default App;