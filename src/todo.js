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

            setTodos([...todos, todo]);
            setTodo("");
        }
        console.log(todos)
    };

    const delTodo = (id) => {
        const newTodo = todos.filter((todo) => {
            return todo !== id;
        });
        setTodos(newTodo);
    };

    const markAsDone = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo === id){
                return {...todo, isDone: !todo.isDone};
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

  return (
    <div>
        <input type="text" value={todo} className="input" onChange={handleChange}/>
        <button className="add-btn" onClick={addTodo}>Add Task</button>

        {todos?.length > 0 ? (
        <ul className='list-display'>
            {todos.map((todo, index) => (
                <div className="task">
                    <li key={todo.index}>
                        <input className='checker' type="checkbox" checked={todo.isDone} onChange={() => markAsDone(todo.id)}/>
                        {todo}
                    </li>
                    <button className="delete-btn" onClick={() => {
                        delTodo(todo);
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