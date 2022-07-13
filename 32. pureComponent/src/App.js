import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';
import User from './User'
import React,{PureComponent,Component} from 'react';

class App extends PureComponent{
  constructor(){
    super();

    this.state={
      count:1,
      counter:1
    }
  }

  render(){
    console.log("Check Rerender in Parent App");
    return (
     <div className='App'>
        <h1>Pure Component </h1>
        <h2>Value of count  ::  {this.state.count}</h2>
        <h2>Value of counter  ::  {this.state.counter}</h2>
        <User counter={this.state.counter}/>
        <button onClick={()=>this.setState({count:this.state.count+1})}>
          Update Count
        </button>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>
          Update Counter
        </button>
     </div>
  )}
};
export default App;
