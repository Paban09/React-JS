import { render } from '@testing-library/react';
import './App.css';
import React,{useState} from 'react';

function App(){
  let[id,setId]=useState('');
  let[name,setName]=useState('');
  let[des,setDes]=useState('');
  return (
    <div className='App'>
      <h1>Controlled Component in React</h1>
      <span> Id: <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}} /></span> <br/>
      <span> Name: <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} /></span> <br/>
      <span> Designaton: <input type='text' value={des} onChange={(e)=>{setDes(e.target.value)}} /></span> <br/>

      <h3>id :: {id}</h3>
      <h3>name :: {name}</h3>
      <h3>designation :: {des}</h3>
      
    </div>
  )
}

export default App;
