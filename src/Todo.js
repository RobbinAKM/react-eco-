import React,{useEffect} from "react";
import './App.css';
import {connect} from 'react-redux';

import {loadTodos , removeTodoRequest ,markTodoAsCompletedRequest} from './thunks';
import {getTodos , getIsLoading ,getIncompleteTodos,getCompleteTodos} from './selectors';

import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';



const Todo =({inCompleteTodos,completeTodos , onRemovePress ,onCompletedPressed ,isLoading , startLoadingTodos })=>{

  useEffect(()=>{
        startLoadingTodos()
      } , [])

const loadingMessage =<div> Loading ...</div>
const content=(
  <div>
  <NewTodoForm/>
  <h1>Incomplete todos:</h1>
  {inCompleteTodos.map((todo,i)=><TodoListItem key={i} todo={todo} onRemovePress={onRemovePress} onCompletedPressed={onCompletedPressed}/>)}

  <h1>Complete todos:</h1>
  {completeTodos.map((todo,i)=><TodoListItem key={i} todo={todo} onRemovePress={onRemovePress} onCompletedPressed={onCompletedPressed}/>)}
 </div>
  )
 return isLoading?loadingMessage:content
};

const mapStateToProps = state=>({
  inCompleteTodos:getIncompleteTodos(state) ,
  completeTodos:getCompleteTodos(state),
  isLoading:getIsLoading(state)
})

const mapDispatchToProps= dispatch=>({
  startLoadingTodos:()=>dispatch(loadTodos()),
  onRemovePress: id=>dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
