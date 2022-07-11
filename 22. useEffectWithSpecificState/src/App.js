import { render } from '@testing-library/react';

import './App.css';
import React,{useEffect,useState} from 'react';

function App(){
  
  const[count,setCount]=useState(0);
  const[data,setData]=useState(10);

  // useEffect(()=>{
  //   console.log("Use Effect Has been called");
  // })

  //to use useEffect for specific state we have to pass currnet value
  
  useEffect(()=>{
    console.log("Use Effect Has been called for Count");
  },[count])

  useEffect(()=>{
    console.log("Use Effect Has been called for Data");
  },[data])

  return (
    <div className='App'>
      <h3>useEffect With spcific State</h3> 
      <h2>Count :: {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
      <h2> Data :: {data}</h2>
      <button onClick={()=>{setData(data+1)}}>Update Data</button>
    </div>
   );   
};
export default App;
