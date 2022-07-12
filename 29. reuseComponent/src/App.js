import { render } from '@testing-library/react';
import './App.css';
import React from 'react';
import User from "./User"
function App() {

  const users = [
    {id: 1, name: "Masud", email: "masud@gml.com", phone: 542356},
    {id: 2, name: "Rana", email: "rana@gml.com", phone: 5464545},
    {id: 3, name: "Paban", email: "paban@gml.com", phone: 666666},
    {id: 4, name: "Ayan", email: "ayan@gml.com", phone: 666666}
  ]

  return (
    <div className='App'>
      <h2>Reuse React component</h2>
      {
        users.map((user,i)=>{
          return(
            <User user={user} key={i}/>
          )
        })
      }
    </div>
  );
};
export default App;
