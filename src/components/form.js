function Form({ todo, setTodo, addTodo }) {
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