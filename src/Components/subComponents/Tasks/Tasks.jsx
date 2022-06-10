import React from 'react'
import { Task } from '../Task/Task'

export const Tasks = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => <Tasks task={task} />)
            }
        </div>
    )
}
