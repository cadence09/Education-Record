import React, {useState}from "react";
import history from '../history';

function Home(){
  const [name, setName]=useState("")

    return (
      <div>
        <p>Hi there! Welcome to your education showcase.</p>
        <label htmlFor="name">Type your name and click "Enter" below to begin!</label>
         <input value={name} onChange={e=>setName(e.target.value)} id="name" placeholder="Your name"/>
         <button onClick={()=>history.push('/Main',name)} >Button</button> 
      </div>
    )
  }
  
  export default Home;