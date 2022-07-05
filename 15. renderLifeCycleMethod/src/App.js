
import { render } from '@testing-library/react';
import React,{useState}from 'react';
import './App.css';
import User from './User';

function App(){
  
    const [name,setName]=useState('Paban');

    return (
      <div className='App'>
        <h1>Render Life Cycle from App class Component</h1>
        <User name={name}/>
        <button onClick={()=>{setName("Masud")}}>Update Name</button>
      </div>
    );
  
};
export default App;
