import './App.css';
import React from 'react';

import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <h1>404 - Page not found</h1>
      <Router>
        <Link to="/" > Home</Link><br />
        <Link to="/about" > About</Link><hr />

        
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route exact={true} path="/" element={<Home />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      

      </Router>

    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>this is a home page</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>this is a about page</p>
    </div>
  )
}


function PageNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>404 - The page is not available</p>
    </div>
  )
}



export default App;