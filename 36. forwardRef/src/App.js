import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';
import User from './User'
import React, {useRef} from 'react';

function App(){

  let inputRef=useRef(null);
  
  function updateInput(){
    inputRef.current.value=100;
    inputRef.current.focus();
    inputRef.current.style.color='red';
  }

  return (
    <div className='App'>
      <h1>forwardRef in React</h1>
      <h1>App as Parent Component</h1>
      <User ref={inputRef} /> 
      <button onClick={()=>{updateInput()}}>Update InputBox</button>
    </div>
  )
}

export default App;
