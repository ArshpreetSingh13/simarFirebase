import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

export const Register = () => {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Contact, setContact] = useState("")
    const [Address, setAddress] = useState("")

    const HandleSubmit=(e)=>{
        e.preventDefault()

        console.log(Name,Email,Password,Contact,Address);

        createUserWithEmailAndPassword(auth,Email,Password).then(async(DATA)=>{
            console.log(DATA.user.uid);

            const uid=DATA.user.uid

            const data={
                name:Name,
                email:Email,
                userType:2,
                contact:Contact,
                address:Address,
                status:true,
                createdAt:Timestamp.now()
            }

            await setDoc(doc(db, "users", uid),data).then(()=>{
                console.log("User Added Successfully");
                
                
            }).catch((err)=>{
                console.log(err);
                
            })


            
        }).catch((err)=>{
            console.log(err);
            
        })
        
    }
  return (
        <>
    <form onSubmit={HandleSubmit}>

              Name: <input value={Name} onChange={(e) => { setName(e.target.value) }} type="text" /><br />
              Email: <input value={Email} onChange={(e) => { setEmail(e.target.value) }} type="email" /><br />
              Password: <input value={Password} onChange={(e) => { setPassword(e.target.value) }} type="password" /><br />

              Contact: <input value={Contact} onChange={(e) => { setContact(e.target.value) }} type="number" /><br />
              address: <input value={Address} onChange={(e) => { setAddress(e.target.value) }} type="text" /><br /><br /><br />

              <button type='submit'>Submit</button>
    </form>
        </>
  )
}
