import React,{useEffect, useState} from 'react'
import { database } from '../firebase';

function Firestore() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let createUserInDB = async() => {
        // let res = await database.users.add({name,age})
        let res = await database.users.doc('11110000').set({name,age}) ///CREATE COMMAND
        console.log(res);
    }
                      // ERROR ARHA H useEffect mn -------------------------
  //   useEffect(async ()=>{
  //     let uid = 'MHNMzdyPvfI6SC18r1Sz';
  //     // let data = await database.users.orderBy('createdAt','desc').get(); //onSnapShot //READ
  //     let data = await database.users.get();
  //     // console.log(data.data())
  //     data.forEach((obj)=>console.log(obj.data()))
  // })

    let update = async() => {
        
        let uid = 'wyjYH0ELloQMfMnhDU1y';
        await database.users.doc(uid).update({ //UPDATE COMMAND
            name,age
        })
    }

    let deletee = async() => {
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
          <button onClick={deletee}>Delete</button>
      </div>
      </>
  )
}

export default Firestore