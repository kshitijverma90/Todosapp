import React from 'react'
import './Todo.css'
import {db} from './firebase';


function Todo(props) {
   const deletetodo=()=>{
        db.collection('Todos').doc(props.todo.id).delete();
   }

  return (
    <div className='todo'>
      
        <h4>{props.todo.todo}</h4>
        <button onClick={deletetodo} >delete</button>
    </div>
  )
}

export default Todo