import './App.css';
import React from 'react';
import User from './User.js'
import NavBar from './NavBar';
import Filter from './Filter';
import Home from './Home';

import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Contact from './Contact';
import Company from './Company';
import Chanel from './Chanel';
import Other from './Other';

function App() {

  return(
    <div className='App'>
      {/* <h1>Dynamic Routing Using Params</h1> */}
      <Router>
          
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/user/:name' element={<User/>}></Route>
            <Route path='/filter' element={<Filter/>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>

            <Route path='/contact/' element={<Contact/>}>
                <Route path='company' element={<Company/>}/>
                <Route path='chanel' element={<Chanel/>}/>
                <Route path='other' element={<Other/>}/>
            </Route>
          </Routes>
          
      </Router>
    </div>
    
  );

}



export default App;