
import React from 'react';
import {useHistory} from 'react-router-dom';


function Main(){

 
  return (
    <div>
      <p>Hi there! Welcome to your education showcase.</p>
      <label htmlFor="name">Type your name and click "Enter" below to begin!</label>
      <input id="name" placeholder="Your name"/>
      <button>Button</button>
    </div>
  )
}

export default Main;
