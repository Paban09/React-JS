import { render } from '@testing-library/react';
import './App.css';
import React, { useState } from 'react';
function App() {
  return (
    <div className='App'>
      <h1>Uncontrolled Component in React</h1>
      <h2>App Component</h2>
      {/* <Counter/>
      <Counter/> */}
      <Counter/>
      <HOCRed cmp={Counter} />
      <Counter/>

    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <h2>Counter Component</h2>
      <h3>{count}</h3>
      <button onClick={() => { setCount(count + 1) }}> Update</button>
    </div>
  )
}


function HOCRed(porps) {
  return (
    <div style={{backgroundColor:'red',padding:'5px'}}>
      <h2>Red HOC Counter</h2>
      <h2><porps.cmp/></h2>
    </div>
  )
}
export default App;


