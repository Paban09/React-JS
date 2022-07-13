import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';
import React from 'react';
import User from "./User"

function parentAlert(data){
  console.log(data);
}

function App() {

  return (

    <div className='App'>
      <h2>Lifting State Up (Sending Data Parent to Child)</h2>
      <User alert={parentAlert}/>
    </div>
  );
};
export default App;
