import React, { useState } from 'react'
import './index.css'
import TaskForm from '../subComponents/TaskFrom/TaskForm'
export const Home = (props) => {
     const [tasks,setTasks] = useState([])

     const addTask = function (task) {
       const newTask = [...tasks , task]
       setTasks(newTask)
     }
  return (
    <div>
      <TaskForm addTask={addTask}/>
    </div>
  )
}
