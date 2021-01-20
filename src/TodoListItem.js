import React from "react";
import './App.css';

const TodoListItem=({todo , onRemovePress ,onCompletedPressed})=>(
  <div className="todo-item-container">
   <h3>{todo.text}</h3>
      <div>
      {todo.isCompleted
               ? null
               : <button
                   onClick={() => onCompletedPressed(todo.id)}
                   className="completed-button">Mark As Completed</button>}
        <button className="remove-button" onClick={()=>{onRemovePress(todo.id)}}> Remove </button>
      </div>
  </div>
);

export default TodoListItem;
