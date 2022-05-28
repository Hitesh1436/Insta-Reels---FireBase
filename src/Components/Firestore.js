import React,{useState,useEffect} from 'react'
import { database } from '../firebase';

function Firestore() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let createUserInDB = async()=>{
    //  let res=  await database.users.add({name,age});
     let res=  await database.users.doc('11110000').set({name,age});  // created unique id apni marji se lkin shi ni hota yeh 
        console.log(res)
    }
  return (
      <>
    <div>
       <label htmlFor='name'>Name</label>
       <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor='age'>Age</label>
       <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
       <button onClick={createUserInDB}>Create</button>
    </div>
    </>
  )
}

export default Firestore