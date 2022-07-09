import { render } from '@testing-library/react';

import './App.css';
import React,{useState} from 'react';

function App(){
  const [data,setData]=useState("Paban");

  return (
    <div className='App'>
      <h1>Hooks With useState</h1>
      <h2>{data}</h2>
      <button onClick={()=>{setData("Masud")}}>Update</button>
    </div>
   );
    
};
export default App;
