import { REMOVE_TODO, CREATE_TODO ,MARK_TODO_AS_COMPLETED ,
         LOADING_IN_PROGESS,LOADING_SUCCESSFUL,LOADING_FAIL} from './actions';

const iniitialState = { isLoading:false , data:[]}

export const todos = (state=iniitialState, action )=>{

   const {type , payload} =action;

   switch (type) {

     case CREATE_TODO:{
       const {todo} = payload;
      return{
         ...state,
         data:state.data.concat(todo)
       }  //concat does not mutate the state
     }

     case REMOVE_TODO:{
       const { todo: todoToRemove } = payload;
        return {
          ...state,
          data:state.data.filter(todo => todo.id !== todoToRemove.id)
        }
     }

     case MARK_TODO_AS_COMPLETED: {
     const { todo: updatedTodo } = payload;
     return {
          ...state,
         data:state.data.map(todo => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo;
        }
        return todo;
      }),
     }
   }
     case LOADING_SUCCESSFUL:{
        const {todos} =payload;
        return {
          ...state,
          isLoading:false,
          data:todos
        }
     }

     case LOADING_IN_PROGESS:
        return{
          ...state,
          isLoading:true
        }

     case LOADING_FAIL:
        return{
          ...state,
          isLoading:false
        }

     default:
       return state
   }
}
