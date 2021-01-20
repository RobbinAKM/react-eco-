import {loadingInProgress ,loadingSuccessful,loadingFail, createTodo ,removeTodo ,markTodoAsCompleted } from './actions';

export const loadTodos=()=>async(dispatch,getState)=>{
  try {
    dispatch(loadingInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
    dispatch(loadingSuccessful(todos));
  } catch (e) {
    dispatch(loadingFail());
    dispatch(displayAlert(e));
  }
}


export const addTodoRequests =text=>async dispatch=>{
  try {
    const body = JSON.stringify({text});
    const response = await fetch('http://localhost:8080/todos',{
      mode: 'no-cors',
      headers:{'Content-Type' :'application/json'},
      method:'post',
      body
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const markTodoAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const completedTodo = await response.json();
        dispatch(markTodoAsCompleted(completedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}




export const displayAlert =text=>()=>{
  alert(text)
}
