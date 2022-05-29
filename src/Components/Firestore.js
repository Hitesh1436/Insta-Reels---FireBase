import React,{useEffect, useState} from 'react'
import { database } from '../firebase';

function Firestore() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let createUserInDB = async() => {
        // let res = await database.users.add({name,age})
        let res = await database.users.doc('11110000').set({name,age}) //CREATE COMMAND
        console.log(res);
    }
    
    useEffect(()=>{
        let uid = 'wyjYH0ELloQMfMnhDU1y';
        let data = async()=>{
            data = await database.users.get();
            data.forEach((obj)=>console.log(obj.data()));
        }
    })
                      

    let update = async() => {
        let uid = 'wyjYH0ELloQMfMnhDU1y';
        await database.users.doc(uid).update({          //UPDATE COMMAND
            name,age
        })
    }

    let deletion = async() => {
        let uid = '11110000';
        await database.users.doc(uid).delete()
    }

    return (
      <>
      <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <label htmlFor="age">Age</label>
          <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
          <button onClick={update}>Create</button>
          <button onClick={deletion}>Delete</button>
      </div>
      </>
  )
}

export default Firestore