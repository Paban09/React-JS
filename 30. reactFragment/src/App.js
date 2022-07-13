import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';
import React from 'react';
import Cols from './Cols'
function App() {

  return (

    <div className='App'>
      <h2>React Fragment</h2>
      <div>
        <table border={1} align={'center'}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Number</td>
              <td>Address</td>
            </tr>
            <tr>
              <Cols />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
