import React, { useState } from 'react'
import { auth, db } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

export const Login = () => {

    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setPassword] = useState("123456")

    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(email);
        console.log(password);

        signInWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                console.log(userCredential);
                console.log(userCredential.user.uid);
                const user = userCredential.user;

               const uid = userCredential.user.uid

              await  getDoc(doc(db,"users",uid)).then((Data)=>{
                    console.log(Data.data());

                    sessionStorage.setItem("Uid",uid)
                    
                }).catch((err)=>{
                    console.log(err);
                    
                })
               
            })
            .catch((error) => {
                console.log(error);
                
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        
    }
    
  return (
    
    <>
          <form onSubmit={handleSubmit}>
              email<input value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }} type="email" /><br />
              password<input value={password} onChange={(e) => {
                  setPassword(e.target.value)
              }} type="password" />

              <button type='submit'>submit</button> 

           </form>
    </>
  )
}
