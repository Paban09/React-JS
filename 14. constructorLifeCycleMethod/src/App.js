
import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';

class App extends Component{
  
  constructor(){
    super();
    console.log("constructor");
    this.state={
      name:"Paban"
    }
  }

  render(){
    console.log("render");
    return (
      <div className='App'>
        <h1>Constructor Life Cycle - {this.state.name}</h1>
      </div>
    );
  }
};
export default App;
