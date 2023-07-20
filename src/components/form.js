import React, { useEffect, useState } from "react";

function Form() {
    const [todo, setTodo] = useState(""); 
    const [todos, setTodos] = useState([]);

    const addTodo = () => {                        // add new todo function if text input isn't empty
        if (todo !== "") {
          setTodos([...todos, todo]);
          setTodo("");
        }
      };

return(
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
)
}

export default Form;