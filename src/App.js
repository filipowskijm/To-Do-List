import './App.css';
import React, { useState } from 'react';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
        <h1>To-Do List</h1>
      <div>
        <input 
         type="text" 
         name="todo"
          value={todo}
          placeholder="Enter a Task..." 
          onChange={(e) => {
            setTodo(e.target.value);
           }}
          />
         <button type="submit" onClick={addTodo}>
          Add
         </button>
      </div>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>

              <button 
              className="delete-button"
              onClick={() => {
                deleteTodo(todo);
              }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
