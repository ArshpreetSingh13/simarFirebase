import { addDoc, collection, Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../firebase'

export const AddCategory = () => {

    const [Name, setName] = useState("")
    const [Img, setImg] = useState("")

    const handlesubmit=async(e)=>{
        e.preventDefault()

        console.log( Name , Img);

        const data={
            Name,
            Img,
            status:true,
            createAt:Timestamp.now()
        }


       await addDoc(collection(db,"category"),data).then(()=>{
            console.log("Data add");
            
        }).catch((err)=>{
            console.log(err);
            
        })
        
    }
  return (
    <>
       <form onSubmit={handlesubmit}>
            <input value={Name} onChange={(e)=>{setName(e.target.value)}}  type="text" />
              <input value={Img} onChange={(e) => { setImg(e.target.value) }} type="text" />


              {/* <button  type='submit'>sub</button> */}
              <input type="submit" />
        </form> 
    </>
  )
}
