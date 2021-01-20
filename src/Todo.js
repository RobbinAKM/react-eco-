import React,{useEffect} from "react";
import './App.css';
import {connect} from 'react-redux';

import {loadTodos , removeTodoRequest ,markTodoAsCompletedRequest} from './thunks';

import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';



const Todo =({todos=[] , onRemovePress ,onCompletedPressed ,isLoading , startLoadingTodos })=>{

  useEffect(()=>{
        startLoadingTodos()
      } , [])

const loadingMessage =<div> Loading ...</div>
const content=(
  <div>
  <NewTodoForm/>
  {todos.map((todo,i)=><TodoListItem key={i} todo={todo} onRemovePress={onRemovePress} onCompletedPressed={onCompletedPressed}/>)}
 </div>
  )
 return isLoading?loadingMessage:content
};

const mapStateToProps = state=>({
  todos: state.todos,
  isLoading:state.isLoading
})

const mapDispatchToProps= dispatch=>({
  startLoadingTodos:()=>dispatch(loadTodos()),
  onRemovePress: id=>dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
