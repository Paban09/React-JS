import './App.css';
import React from 'react';
import User from './User.js'

import {BrowserRouter as Router,Routes,Route,Link,Navigate} from 'react-router-dom'

function App() {

  return(
    <div className='App'>
      <h1>Dynamic Routing Using Params</h1>
      <Router>
          
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user/paban'>Paban Page</Link></li>
            <li><Link to='/user/ayan'>Ayan Page</Link></li>
          
          </ul>

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