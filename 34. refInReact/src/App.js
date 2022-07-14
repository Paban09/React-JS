import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';

import React, {createRef,Component} from 'react';

class App extends Component {

  constructor(){
    super();
     
    this.inputRef=createRef();
  }
  
  componentDidMount(){
    // console.log(this.inputRef.current.value="1000");
  }

  getVal(){
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color="red";
    this.inputRef.current.style.backgroundColor="green";
  }

  render(){return (
    <div className='App'>
      <h1>Ref in React</h1>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={()=>{this.getVal()}}>Check Ref</button>
    </div>
  )}
}

export default App;
