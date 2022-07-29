import './App.css';
import React from 'react';
import User from './User.js'
import NavBar from './NavBar';
import Filter from './Filter';

import {BrowserRouter as Router,Routes,Route,Navigate,useNavigate} from 'react-router-dom'

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
          </Routes>
          
      </Router>
    </div>
    
  );

}

function Home(){
  const navigate=useNavigate();

  // conditonal routing 
  const navToPage=(url)=>{
    navigate(url);
  };
  return(
      <div>
        <h1>This is Home Component</h1>
          {/* <button onClick={()=>{navigate('/filter')}}>go to Filter page</button>  */}
          <button onClick={()=>{navToPage('/filter')}}>go to Filter page</button> 
      </div>
    );
}


export default App;