import React, { useState, } from 'react'
import {auth} from './firebase'

function Login({user}) {
   
   const [password,setPassword]=useState('');
   const [email,setEmail]=useState('');

   const registeruser=()=>{
       auth
       .createUserWithEmailAndPassword(email,password)
    //    .then((auth)=>{
    //        console.log(auth);
    //        if(auth){
    //            console.log(auth)
    //        }
    //    })
       .catch(error=>alert(error.message))
       setEmail('')
       setPassword('');
   }

   const loginuser=()=>{
     
      auth
      .signInWithEmailAndPassword(email,password)
    //   .then(auth=>{
    //       console.log(auth);
    //   })
      .catch(error=>alert(error.message))
      setEmail('')
      setPassword('');
      
   }

   const signout=()=>{
    auth.signOut();
   }



  return (
    <div className='login container'>
        <h3>enter your email</h3>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} />
        <h3>enter password</h3>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
        <button onClick={loginuser}>{user?'signout':'login'}</button>
        <button onClick={registeruser}>register</button>
        <button onClick={signout}>signout</button>
    </div>
  )
}

export default Login