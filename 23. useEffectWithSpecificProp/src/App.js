import { render } from '@testing-library/react';

import './App.css';
import React,{useEffect,useState} from 'react';
import User from './User';

function App(){
  const[count,setCount]=useState(0);
  const[data,setData]=useState(10);

  useEffect(()=>{
    console.log("Use Effect from App Count");
  },[count])

  useEffect(()=>{
    console.log("Use Effect from App Data");
  },[data])

  return (
    <div className='App'>
      <h3>useEffect With Specific State</h3>
      <h3>State from App as Parent</h3> 
      <h2>Count :: {count}</h2>
      <h2>Data :: {data}</h2>
      <User countProp={count}  dataProp={data} />
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
      <button onClick={()=>{setData(data+1)}}>Update Data</button>  
    </div>
   );   
};
export default App;
