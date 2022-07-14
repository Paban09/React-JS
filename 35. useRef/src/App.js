import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';

import React, {useState,useRef} from 'react';

function App(){

  function handleInput(){
    console.log("Function Input");
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.style.backgroundColor='green';

  }

  let inputRef=useRef(null)
  return (
    <div className='App'>
      <h1>useRef in React</h1>
      <input type='text' ref={inputRef}></input>
      <button onClick={()=>{handleInput()}}>Handle Input</button>
    </div>
  )
}

export default App;
