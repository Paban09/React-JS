import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';

import React, { useState,useMemo} from 'react';

function App() {
  const [data, setData] = useState(0);
  const [item, setItem] = useState(10);
  

  const multiDataMemo=useMemo(function multiData(){
    console.log("Multi Data Memo Function is calling");
    return data*5
  },[data])

  return (
    <div className='App'>
      <h1>Use Memo </h1>
      <h2>Value of Data :: {data}</h2>
      <h2>Value of Mul of data :: {multiDataMemo}</h2>
      <h2>Value of Item :: {item}</h2>
      
      <button onClick={() => setData(data + 1)}>Change Data</button>
      <button onClick={() => setItem(item + 1)}>Change Item</button>
    </div>
  )
}

export default App;
