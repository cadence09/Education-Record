import React, {useState}from "react";
import Main from "./Main"
import history from '../history';

function Home(){
  const [name, setName]=useState("")
 
const handleChange=(e)=>{
  console.log(e.target.value)
  setName(e.target.value)
}
 const handleClick=()=>{
  history.push('/Main',name)
  
 }



    return (
      <div>
        <p>Hi there! Welcome to your education showcase.</p>
        <label htmlFor="name">Type your name and click "Enter" below to begin!</label>
        {/* <input value={name} onChange={handleChange} id="name" placeholder="Your name"/>
        <button onClick={handleClick} name1={name}>Button</button> */}
         <input value={name} onChange={e=>setName(e.target.value)} id="name" placeholder="Your name"/>
 
         <button onClick={()=>history.push('/Main',name)} >Button</button> 
   
      </div>
    )
  }
  
  export default Home;