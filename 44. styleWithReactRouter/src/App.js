import './App.css';
import React from 'react';
import User from './User.js'
import NavBar from './NavBar';

import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

function App() {

  return(
    <div className='App'>
      {/* <h1>Dynamic Routing Using Params</h1> */}
      <Router>
          
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/user/:name' element={<User/>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>

      </Router>
    </div>
    
  );

}

function Home(){
  return(
    <h1>This is Home Component</h1>
  );
}


export default App;