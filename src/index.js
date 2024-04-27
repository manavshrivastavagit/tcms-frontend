import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CustomerTable from './CustomerTable';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlansTable from './PlansTable';
import ChangePlanForm from './ChangePlanForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <h1>
       Customers Table
      </h1>
   
    <CustomerTable />

    <br></br>
    <h1>
       Plans Table
      </h1>
   
    <PlansTable />
    <h1>
      Change Plan
      </h1>
    <ChangePlanForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
