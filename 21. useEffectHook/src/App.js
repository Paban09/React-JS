import { render } from '@testing-library/react';

import './App.css';
import React,{useEffect,useState} from 'react';

function App(){
 
  const[count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Use Effect");
  })
  return (
    <div className='App'>
      <h1>useEffect Hook {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Counter</button>
    </div>
   );   
};
export default App;
