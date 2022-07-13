import { render } from '@testing-library/react';
import './App.css';
// import React,{Fragment} from 'react';
import React,{PureComponent,Component} from 'react';
class User extends PureComponent{
  render(){
    console.log("Check Rerender in Child User");
    return (
     <div className='App'>
        <h1>User Component</h1>
        <h2>Value of counter  ::  {this.props.counter}</h2>
     </div>
  )}
};
export default User;
