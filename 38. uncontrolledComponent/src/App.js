import { render } from '@testing-library/react';
import './App.css';
import React,{useRef} from 'react';

function App() {
  let idRef= useRef(null)
  let nameRef= useRef(null)


  function submitForm(e){
    e.preventDefault()
    console.log(idRef.current.value);
    console.log(nameRef.current.value);
    let univaersity=document.getElementById("uni").value;
    console.log(univaersity)
  }
  
  return (
    <div className='App'>
      <h1>Uncontrolled Component in React</h1>
      <form onSubmit={submitForm}>
        <span> Id: <input type='text' ref={idRef} /></span> <br/>
        <span> Name: <input type='text'  ref={nameRef}/></span> <br/>
        <span>Univaersity Name: <input type='text'  id='uni'/> </span> <br/>
    
        <button>Submit</button>
      </form> 
    </div>
  )
}

export default App;
