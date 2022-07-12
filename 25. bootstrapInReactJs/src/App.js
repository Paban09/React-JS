import { render } from '@testing-library/react';
import './App.css';
import {Button,Alert} from 'react-bootstrap';
import React from 'react';
function App(){
  
  return (
    <div className='App'>
      <h2 style={{color:"red",backgroundColor:"black"}}>Style type 2</h2>
      
      <Alert variant='warning'>
        Trying bootstrap in React
      </Alert>

      <Button>Click Me</Button>
    </div>
   );   
};
export default App;
