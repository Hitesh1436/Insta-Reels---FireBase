import React,{useEffect, useState} from 'react';
import {auth} from '../firebase';

function Fireauth() {
    const [email,setEmail]  = useState('')
    const [password,setpassword] = useState('')
    const [user,setUser]  = useState('')
let create = async()=>{
  let res =  await auth.createUserWithEmailAndPassword(email,password);
    console.log(res);
}
useEffect(()=>{
  let unsub = auth.onAuthStateChanged((user)=>
  setUser(user))
  return ()=>{
    unsub();       // cleanUp khte hn isse mtlb jo bhi event listener lge hn vo component unmount hoga toh htne chaiye
  }
},[])

let logout = async()=>{
  await auth.signOut();
}

let signin = async()=>{
  await auth.signInWithEmailAndPassword(email,password);
}

  return (
      <>
      {
        user==null ?
    <div>
        <label htmlFor='email'>Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={create}>Sign In</button>
    </div>:
        <>
        <div>{user.uid}</div>
        <button onClick={logout}>Logout</button>
        </>
     }
    </>
  )
}

export default Fireauth