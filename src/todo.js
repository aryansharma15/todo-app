import React from 'react';
import './App.css'
import { useState } from 'react';

function Todo() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([
        {id: 1, task: 'SimpleTask1', isDone: false},
        {id: 2, task: 'SimpleTask2', isDone: false}
    ])
    // const [todos, setTodos] = useState('')

    // const [edit, setEdit] = useState('')

    const handleChange = (event) => {
        setTodo(event.target.value);
        // console.log(todo);
    }


    // Although using arrays for todos is fine for simple todo functions, we need a todo object to add advanced functionality.
    const addTodo = () => {
        if(todo.trim() !== ""){



            setTodos([...todos, {id:Date.now(), task: todo, isDone: false}]);
            setTodo("");
        }
        console.log(todos)
    };

    const delTodo = (id) => {
        const newTodo = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodo);
    };

    const markAsDone = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, isDone: !todo.isDone };
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
            {todos.map((todo) => (
                <div className="task" key={todo.id}>
                    <li key={todo.index}>
                        <input className='checker' type="checkbox" checked={todo.isDone} onChange={() => markAsDone(todo.id)}/>
                        {todo.task}
                    </li>
                    <button className="delete-btn" onClick={() => {
                        delTodo(todo.id);
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