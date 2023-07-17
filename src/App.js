import './App.css';
import React, { useEffect, useState } from 'react';

function App() { 

 // *much of this code was inspired by this tutorial by Muhammad Yahya: 
 //  https://medium.com/oli-systems/react-todo-app-tutorial-e935fe716179

  const [data, setData] = useState({})

  useEffect(() => {
      fetch('/home')
      .then(res => res.json())
      .then(data => setData(data))
    }, [])

  const [todo, setTodo] = useState("");          // initializing state variables
  const [todos, setTodos] = useState([]);

  const addTodo = () => {                        // add new todo function if text input isn't empty
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {                // delete todo function
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (                                      
    <div className="App">
        <h1>To-Do List</h1>

    <div>{data.name}</div>              
    <div>{data.age}</div>

      <div>                                           
        <input 
         type="text"                       // main rendering of todo input form
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
      {todos?.length > 0 ? (                // if number of todos is greater than 0, show the list of todos
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
      ) : (                                 // if there aren't any todos yet, show "No task found"
        <div className="empty">
          <p>No tasks yet</p>
        </div>
      )}
    </div>
  );
}

export default App;
