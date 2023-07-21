import './App.css';
import Login from './components/login';
import Form from './components/form';
import List from './components/list';
import React, { useState } from 'react';

function App() { 

  // *code was inspired by this tutorial by Muhammad Yahya: https://medium.com/oli-systems/react-todo-app-tutorial-e935fe716179 

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
      <Login />
      <br></br><br></br>
      <Form todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}      

export default App;
