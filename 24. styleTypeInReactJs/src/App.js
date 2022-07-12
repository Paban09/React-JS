import { render } from '@testing-library/react';
import './App.css';
import './style.css'

import React from 'react';
import style from './custom.module.css'
function App(){
  
  return (
    <div className='App'>
     
      {/* external file to add css */}
      <h2 className='primary'>Style type 1</h2>

      {/* inline css */}
      <h2 style={{color:"red",backgroundColor:"black"}}>Style type 2</h2>

      {/* moduler css */}
      <h2 className={style.success}>Style type 3</h2>

    </div>
   );   
};
export default App;
