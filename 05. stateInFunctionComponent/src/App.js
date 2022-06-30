
import './App.css';
import User from './User';
import Users from './Users';
import {useState} from 'react';

function App() {
  // let data='Masud rana';
  // function updateData(){
  // data='Paban';
  // alert('Data Updated');
  // }  
  // console.warn('___________');

  const[data,setData]=useState('Masud'); //destructureing state
  function updateData(){
    setData('Paban');
    // alert('Data Updated');
    } 
  console.warn('___________');

  return (
    <div className="App">
      
      <User />
      <header className="App-center">
        State in React 
        <h1>{data}</h1>

      </header>
      <Users />
      <div>
        <button onClick={updateData}>Update Data</button>

      </div>
    </div>
  );
}

export default App;
