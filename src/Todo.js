import React from "react";
import './App.css';
import {connect} from 'react-redux';
import {removeTodo} from './actions';

import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const Todo =({todos=[] , onRemovePress })=>(
<div>
  <NewTodoForm/>
  {todos.map((todo,i)=><TodoListItem key={i} todo={todo} onRemovePress={onRemovePress}/>)}
 </div>
);

const mapStateToProps = state=>({
  todos: state.todos
})

const mapDispatchToProps= dispatch=>({
  onRemovePress: text=>dispatch(removeTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
