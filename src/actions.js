export const CREATE_TODO='CREATE_TODO';
export const createTodo =todo=>(
  {
    type:'CREATE_TODO',
    payload:{todo}
  }
)

export const REMOVE_TODO='REMOVE_TODO'
export const removeTodo =todo=>(
  {
    type:'REMOVE_TODO',
    payload:{todo}
  }
)

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = todo => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { todo },
});


export const LOADING_IN_PROGESS = 'LOADING_IN_PROGESS';
export const loadingInProgress=()=>(
  {type:"LOADING_IN_PROGESS"}
)

export const LOADING_SUCCESSFUL= "LOADING_SUCCESSFUL"
export const loadingSuccessful =todos=>(
  {
    type:"LOADING_SUCCESSFUL",
    payload:{todos}
  }
)

export const LOADING_FAIL = 'LOADING_FAIL'
export const loadingFail =()=>(
  {type:"LOADING_FAIL"}
)
