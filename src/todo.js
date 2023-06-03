import React from 'react';
import './App.css'
import { useState } from 'react';

function Todo() {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState('')

    // const [edit, setEdit] = useState('')

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

    const delTask = (id) => {
        const newTask = tasks.filter((task) => {
            return task !== id;
        });
        setTasks(newTask);
    };

    const markAsDone = (value) => {
        const updatedTasks = tasks.map((task) => {
            if(task === value){
                return {...task, isDone: !task.isDone};
            }
            return task;
        });

        setTasks(updatedTasks);
    }

  return (
    <div>
        <input type="text" value={task} className="input" onChange={handleChange}/>
        <button className="add-btn" onClick={addTodo}>Add Task</button>

        {tasks?.length > 0 ? (
        <ul className='list-display'>
            {tasks.map((task, index) => (
                <div className="task">
                    <li key={index}>
                        <input className='checker' type="checkbox" checked={task.isDone} onChange={() => markAsDone(task.id)}/>
                        {task}
                    </li>
                    <button className="delete-btn" onClick={() => {
                        delTask(task);
                    }}>Delete</button>
                </div>
            ))}
        </ul>
        ) : (
            <div className="empty">
                <p>No task found</p>
            </div>

        )}
        
    </div>


  )
}

export default Todo