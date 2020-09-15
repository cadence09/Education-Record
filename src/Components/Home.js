import React from "react";
import history from '../history';

function Home(){

 
    return (
      <div>
        <p>Hi there! Welcome to your education showcase.</p>
        <label htmlFor="name">Type your name and click "Enter" below to begin!</label>
        <input id="name" placeholder="Your name"/>
        <button onClick={()=>history.push('/Main')}>Button</button>
      </div>
    )
  }
  
  export default Home;