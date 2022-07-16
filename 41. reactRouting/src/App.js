import './App.css';
import React from 'react';
import Navbar from './nav'
import {Routes, Route } from 'react-router-dom'
import Home from './home';
import About from './about';

function App() {
  return (
    <div className='App'>
      {/* <h1>Routing in React</h1> */}

        <Navbar/>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route  path="/" exact={true} element={<Home />}></Route>

        </Routes>

    </div>
  )
}



export default App;