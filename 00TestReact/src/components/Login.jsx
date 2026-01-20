
import React from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
import { useContext } from 'react';
 


function Login() {
    const [userName , setUserName] = useState('');

const [password , setPassword] = useState('');

const {setUser} = useContext(UserContext)

const clickHandle = (e)=>{
    e.preventDefault()
    setUser({userName ,password})
    console.log(userName , password);
    
}
  return (
    <div>
        <h3>Login</h3>
        <input
         type="text"
         value={userName}
         onChange={(e)=> setUserName(e.target.value)}
         placeholder='Username'
          />
          <input
          
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          placeholder='Password'
           
          
          />
          <button  onClick={clickHandle}>Login</button>


    </div>
  )
}

export default Login