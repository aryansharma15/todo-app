import React from 'react';
import './App.css'
import { useState } from 'react';

function Todo() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState('')

    // const [edit, setEdit] = useState('')

    const handleChange = (event) => {
        setTodo(event.target.value);
        // console.log(todo);
    }

    const addTodo = () => {
        if(todo.trim() !== ""){
            const newTodo = {
                id: Math.random() * 100,
                text: task,
                isDone: false
            }

            setTodos([...todos, newTodo]);
            setTodo("");
        }
        console.log(todos)
    };

    const delTask = (id) => {
        const newTodo = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTasks(newTodo);
    };

    const markAsDone = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, isDone: !todo.isDone};
            }
            return todo;
        });

        setTasks(updatedTodos);
    }

  return (
    <div>
        <input type="text" value={todo} className="input" onChange={handleChange}/>
        <button className="add-btn" onClick={addTodo}>Add Task</button>

        {tasks?.length > 0 ? (
        <ul className='list-display'>
            {tasks.map((task, index) => (
                <div className="task">
                    <li key={index}>
                        <input className='checker' type="checkbox" checked={todo.isDone} onChange={() => markAsDone(todo.id)}/>
                        {todo}
                    </li>
                    <button className="delete-btn" onClick={() => {
                        delTask(todo);
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