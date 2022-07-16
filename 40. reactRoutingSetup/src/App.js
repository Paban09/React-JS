import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      {/* <h1>Routing in React</h1> */}
      <Router>

        <Link to="/home"> Home Page</Link><br />
        <Link to="/about"> About Page</Link><br /><hr />

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>

      </Router>
    </div>
  )
}

function Home() {
  return (
    <div className='App'>
      <h1>Home Page</h1>
      <p>this is home a page of website</p>
    </div>
  )
}

function About() {
  return (
    <div className='App'>
      <h1>About Page</h1>
      <p>this is about a page of website</p>
    </div>
  )
}

export default App;