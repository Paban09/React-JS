import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';

class App extends Component{

  constructor(){
    console.log("constructor");
    super();
    this.state={
      count: 0,
      
    }
  }

  shouldComponentUpdate(){
    console.warn(" shouldComponentUpdate",this.state.count);
    // return true;

    if(this.state.count>5 && this.state.count<10){
      return true;
    }else{
      return false;
    }
  }

  render(){
    console.log("render");
    return (
      <div className='App'>
        <h1>Should Component Update</h1>
        <h1>Count :  {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
      </div>
    );

  };
    
};
export default App;
