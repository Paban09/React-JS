import React,{useState} from 'react';
import './App.css';
function App(){  
  const [status,setStatus]=useState(true);
  return (
    <div className='App'>
      {status?<h1>Hello Paban</h1>:null}

      {/* hide and show element */}
      {/* <button onClick={()=>{setStatus(false)}}>Hide</button>
      <button onClick={()=>{setStatus(true)}}>Show</button> */}

      {/* making toggle */}
      <button onClick={()=>{setStatus(!status)}}>Toggle</button>

    </div>
  );  
};
export default App;
