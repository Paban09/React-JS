import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';
import Student from './Student'
class App extends Component{

  constructor(){
    super();
    this.state={
     show:true
    }
  }
  
  render(){
    return (
      <div className='App'>
        <h1>Component Will Unmount</h1>
        {
          this.state.show ? <Student /> : <h2>"this.state.show value is Flase"</h2>
        }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button>
      </div>
    );

  };
    
};
export default App;
