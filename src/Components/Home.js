import React, {useState}from "react";
import history from '../history';
import styled from "styled-components";
import Grid  from '@material-ui/core/Grid';

function Home(){
  const [name, setName]=useState( "" )

    return (
        <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
            <Container>
                <p>Hi there! Welcome to your education showcase.</p>
                <label htmlFor="name">Type your name and click "Enter" below to begin!</label><br/>
                <ValueField  value={ name } onChange={ e=>setName( e.target.value ) } id="name" placeholder="Your name"/><br/>
                <button onClick={ ()=>history.push( '/Main',name ) } >Button</button> 
            </Container>
        </Grid>
    )
  }
  
  const Container = styled.div`
    text-align:center;
    padding:10em
    
  `
  const ValueField = styled.input`
   margin:1em
  `


  export default Home;