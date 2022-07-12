import { render } from '@testing-library/react';
import './App.css';
import React from 'react';
import { Table } from 'react-bootstrap';
function App() {

  const users = [
    {
      id: 1, name: "Masud", email: "masud@gml.com", phone: 542356,
      address: [{ city: "Dhaka", area: "Keraniganj", code: "1315" }, { city: "Khulna", area: "Dhamrai", code: "2200" },
      { city: "Barisal", area: "Kaliganj", code: "3300" }, { city: "Dhaka", area: "Luxmibajar", code: "1210" }]
    },

    {
      id: 2, name: "Rana", email: "rana@gml.com", phone: 5464545,
      address: [{ city: "Khulna", area: "Dhamrai", code: "2200" }, { city: "Khulna", area: "Dhamrai", code: "2200" },
      { city: "Barisal", area: "Kaliganj", code: "3300" }, { city: "Dhaka", area: "Luxmibajar", code: "1210" }]
    },

    {
      id: 3, name: "Paban", email: "paban@gml.com", phone: 666666,
      address: [{ city: "Dhaka", area: "Luxmibajar", code: "1210" }, { city: "Khulna", area: "Dhamrai", code: "2200" },
      { city: "Barisal", area: "Kaliganj", code: "3300" }, { city: "Dhaka", area: "Luxmibajar", code: "1210" }]
    },

    {
      id: 4, name: "Ayan", email: "ayan@gml.com", phone: 666666,
      address: [{ city: "Barisal", area: "Kaliganj", code: "3300" }, { city: "Khulna", area: "Dhamrai", code: "2200" },
      { city: "Barisal", area: "Kaliganj", code: "3300" }, { city: "Dhaka", area: "Luxmibajar", code: "1210" }]
    }
  ]

  return (
    <div className='App'>
      <h2>Nested List with Nested Array and Nested Map</h2>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>address</td>
          </tr>

          {
            users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    {
                      <Table striped bordered hover variant="dark">
                        <tbody>

                          <tr>
                            <td>city</td>
                            <td>area</td>
                            <td>code</td>
                          </tr>

                          {
                            user.address.map((add, x) => {

                              return (
                                <tr key={x}>
                                  <td>{add.city}</td>
                                  <td>{add.area}</td>
                                  <td>{add.code}</td>
                                </tr>)

                            })
                          }

                        </tbody>
                      </Table>
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </Table>
    </div>
  );
};
export default App;
