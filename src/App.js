import React, { useState } from 'react'
import Choice from './Choice'

export default function App() {
  const[text,setText]=useState("Hi how are you today")
  const[wel,setWel]=useState(null)
  const[cel,setCel]=useState(0)
  setTimeout(() => {
      setText("Welcome to the temperature converter website")
      setWel("Click on the button to proceed further")
  }, 3000);
  return (
    <>
    <u><h1 style={{color:'green',backgroundColor:'magenta',textAlign:'center',marginTop:'10vh',padding:'0.7rem',border:'2px solid brown'}}>{text}</h1></u>
     <h3 style={{textAlign:'center',fontSize:'1.7rem',color:'#f7f7f2',backgroundColor:'#f05d23'}}>{wel}</h3>
     {wel?<button onClick={()=>{setCel(2)}} style={{marginLeft:'40vw'}}>Get Started</button>:''
        }
        {cel==2?<Choice/>:''}
     </>
  )
}