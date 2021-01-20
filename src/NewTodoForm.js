import React ,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodoRequests} from './thunks'

const NewTodoForm =({todos,onCreatePress })=>{
  const [input , changeInput]= useState('');
  return(
    <div className="new-todo-form">
      <input type="text" value={input} onChange={e=>changeInput(e.target.value)} />
      <button
      className="new-todo-button"
      onClick={ ()=>{
          onCreatePress(input);
          changeInput('');
      }}
      >Create Todo
      </button>
    </div>
  );
}

const mapStateToProps= state =>({
     todos:state.todos
});

const mapDispatchToProps= dispatch =>({
     onCreatePress: text=>dispatch(addTodoRequests(text))
})


export default connect(mapStateToProps ,  mapDispatchToProps)(NewTodoForm);
