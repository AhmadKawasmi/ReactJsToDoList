import React, { useState } from 'react'

 const TaskForm = ({ addTask}) => {
     const [taskName , setTaskName] = useState("")
     const inputHandler =(event) => {
            const newValue = event.target.value
            setTaskName(newValue)
        } 

        const addTaskHandler = function () {
            const task = {
                title:taskName,
                done:false,
                createDate: Date.now()
            }
            addTask(task)
            setTaskName("")
        }

  return (
    <div>
        <input 
        value={taskName}
        onChange={inputHandler}
        type="text" 
        placeholder='Enter task title'/>
        <button onClick={addTaskHandler}>
            add task
        </button>
    </div>
  )
  }

export default TaskForm
