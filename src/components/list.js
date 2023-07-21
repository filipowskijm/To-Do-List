function List({ todos, deleteTodo }) {
return (
    <>
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
    </>
    );
};

export default List;
