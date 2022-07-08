import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();
    console.warn("constrctor");
    this.state={
      name:"Paban"
    }
  }

  componentDidMount(){
    console.warn("componentDidMount");
  }

  render(){
    console.warn("render");
    return (
      <div className='App'>
        <h1>Component Did Mount</h1>
        <h2>{this.state.name}</h2>
        <button onClick={()=>{this.setState({name:"Masud"})}}>update</button>
      </div>
    );

  };
    
};
export default App;
