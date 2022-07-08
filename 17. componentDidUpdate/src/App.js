import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';

class App extends Component{

  constructor(){
    console.log("constructor");
    super();
    this.state={
      active:"Null",
      who:"Null"
    }
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
      console.log("componentDidUpdate");
      if(this.state.who =="Null"){
        this.setState({who:"Active"});
      }
  }

  render(){
    console.log("render");
    return (
      <div className='App'>
        <h1>Component Did Update</h1>
        <h1>Active :  {this.state.active}</h1>
        <button onClick={()=>{this.setState({active:"Active"})}}>Activate</button>
        <h1>Who :  {this.state.who}</h1>    
        {/* <button onClick={()=>{this.setState({who:"active"})}}>Change</button> */}
      </div>
    );

  };
    
};
export default App;
