import { render } from '@testing-library/react';
import './App.css';
import React from 'react';
import { Table } from 'react-bootstrap';
function App() {

  const users = [
    { id: 1, name: "Masud", email: "masud@gml.com", phone: 542356, address: "Dhaka" },
    { id: 2, name: "Rana", email: "rana@gml.com", phone: 5464545, address: "Khulna" },
    { id: 3, name: "Paban", email: "paban@gml.com", phone: 666666, address: "Barisal" },
    { id: 4, name: "Ayan", email: "ayan@gml.com", phone: 666666, address: "Chittagang" }
  ]
  return (
    <div className='App'>
      <h2>Handle array with List & Unique Key with bootstrap</h2>
      <Table striped bordered hover variant="dark">
        <tbody>

          
          {users.map((user, i) => {
            return (
              
              // <tr key={i}>
              //   <td>{user.id}</td>
              //   <td>{user.name}</td>
              //   <td>{user.email}</td>
              //   <td>{user.phone}</td>
              // </tr>
              user.phone === 666666 ?
                <tr key={i}>
                  <td>{i}</td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr> : null
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default App;
