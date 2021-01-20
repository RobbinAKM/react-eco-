import { REMOVE_TODO, CREATE_TODO ,MARK_TODO_AS_COMPLETED ,
         LOADING_IN_PROGESS,LOADING_SUCCESSFUL,LOADING_FAIL} from './actions';


export const isLoading=(state=false,action)=>{
  const {type} =action ;

  switch (type) {
    case LOADING_IN_PROGESS:
        return true ;

    case LOADING_SUCCESSFUL:
    case LOADING_FAIL:
        return false;

    default:
      return state;
  }

}

export const todos = (state=[], action )=>{

   const {type , payload} =action;

   switch (type) {

     case CREATE_TODO:{
       const {todo} = payload;
      return state.concat(todo); //concat does not mutate the state
     }

     case REMOVE_TODO:{
       const { todo: todoToRemove } = payload;
        return state.filter(todo => todo.id !== todoToRemove.id);
     }

     case MARK_TODO_AS_COMPLETED: {
     const { todo: updatedTodo } = payload;
     return state.map(todo => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo;
        }
        return todo;
    });
   }
     case LOADING_SUCCESSFUL:{
        const {todos} =payload;
        return todos;
     }

     case LOADING_IN_PROGESS:
     case LOADING_FAIL:
     default:
       return state
   }
}
