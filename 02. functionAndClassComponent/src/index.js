import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './Users';

import reportWebVitals from './reportWebVitals';
// import { divide } from 'lodash';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
    
    <App />
    {/* reuse the code as component */}
    <Users />
    <Footer />
  </React.StrictMode>
);




function Footer() {
  return (<div>
    <h2>This is from the same file as footer component</h2>
  </div>)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
