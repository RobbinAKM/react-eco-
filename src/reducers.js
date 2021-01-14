import { REMOVE_TODO, CREATE_TODO } from './actions.js';

export const todos = (state=[], action )=>{

   const {type , payload} =action;

   switch (type) {

     case CREATE_TODO:{
       const {text} = payload;
       const newTodo ={
         text,
         isCompleted:false
       };
      return state.concat(newTodo); //concat does not mutate the state
     }
     case REMOVE_TODO:{
       const {text} = payload;
       return state.filter(todo => todo.text !== text);
     }
     default:
       return state
   }
}
