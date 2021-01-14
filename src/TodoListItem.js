import React from "react";
import './App.css';

const TodoListItem=({todo , onRemovePress})=>(
  <div className="todo-item-container">
   <h3>{todo.text}</h3>
      <div>
        <button className="completed-button" >Mark as completed </button>
        <button className="remove-button" onClick={()=>{onRemovePress(todo.text)}}> Remove </button>
      </div>
  </div>
);

export default TodoListItem;
