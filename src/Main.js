import React, { useEffect, useState } from 'react'
import './Main.css'
import Todo from './Todo';
import {auth, db} from './firebase'
import Login from './Login'
import { styled } from '@material-ui/core';


function Main() {
   const[todos,setTodos]=useState([]);
   const[input,setInput]=useState('');
   const[search,setSearch]=useState('');
   
   const[user,setUser]=useState(null);


   useEffect(()=>{
         db
       .collection('Todos').onSnapshot(snapshot=>{
         setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
       })
       auth.onAuthStateChanged(authUser=>{
         if(authUser){
           setUser(authUser);
         }
         else{
           setUser(null);
         }
       })
       

   },[]);



   const addTodo=()=>{
    
       db
       .collection('Todos').add({
         todo:input,
         
        } )
       setInput('');
   }
  return (
    <div className='main'>
      <div className='main_input'>
    <h4>hello {user?.email}</h4>
    <input type="text" value={input} placeholder='enter your todos here!!' onChange={event=>setInput(event.target.value)}  /> 
    <button onClick={addTodo} >add todos</button>
    <input type="search" value={search} placeholder='search for todos' onChange={event=>setSearch(event.target.value)} />
    <ul>
        {todos.filter(todo=>((todo.todo).toLowerCase()).includes(search.toLowerCase())).map(todo=>(
            <li><Todo todo={todo}  /></li>
        ))}
    </ul> </div>
    <div className='login_todo'>
      <button >open</button>
      <Login user={user}/>
      </div>  
    </div>
  )
}

export default Main