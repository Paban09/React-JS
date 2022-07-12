import { render } from '@testing-library/react';
import './App.css';

import React from 'react';
function App(){
  const stu= ['Masud', 'Rana', 'Paban', 'Ayan'];

  stu.map((name)=>{
    console.log("Name : ",name);
  })


  const students=[
    {id:1,name:"Masud",email:"masud@gml.com",phone:542356},
    {id:2,name:"Rana",email:"rana@gml.com",phone:5464545},
    {id:3,name:"Paban",email:"paban@gml.com",phone:633466},
    {id:4,name:"Ayan",email:"ayan@gml.com",phone:4563456}
  ]
  return(
    <div className='App'>
      <h2>Handle array with List</h2>
      <table border="1" align={'center'}>
      <tr>
        <td colSpan={4}>Student Table</td>
      </tr>
      <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
      </tr>
      {students.map((student)=>{return(
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>
        </tr>
        )})}
      </table>
    </div>
  );
};
export default App;
