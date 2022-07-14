import React, {forwardRef} from 'react';

function User(porps,ref){

  
    return (
      <div className='App'>
        <h1>forwardRef in User Child Component</h1>
        <input type='text' ref={ref}></input>
      </div>
    )
  }
  
  export default forwardRef( User);
  