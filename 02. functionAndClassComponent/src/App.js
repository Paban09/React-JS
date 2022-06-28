import logo from './logo.svg';
import './App.css';
import User from './User';

//to iport in the same page
import React, { Component } from "react";

function App() {

  //component inside Component
  function Apple() {
    return (
      <div>
        <h1> This is form component inside a component</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Head />
      
      {/* using component inside component */}
      {Apple()}

      {/*Another way of  using component inside component */}
      <Apple/>

      <User />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Head extends Component {
  render() {
    return (
      <div>
        <h1>This is from the same file as  Class component</h1>
      </div>
    )
  }
}

export default App;
