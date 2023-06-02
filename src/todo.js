import React from 'react';
import './App.css'
import { useState } from 'react';

function Todo() {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState('')

    const handleChange = (event) => {
        setTask(event.target.value);
        // console.log(task);
    }

    const addTodo = () => {
        if(task !== ""){
            setTasks([...tasks, task]);
            setTask("");
        }
        console.log(tasks)
    };

  return (
    <div>
        <input type="text" value={task} className="input" onChange={handleChange}/>
        <button className="add-btn" onClick={addTodo}>Add</button>
    </div>
  )
}

export default Todo