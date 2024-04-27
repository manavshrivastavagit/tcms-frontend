import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get('http://localhost:8000/customers');
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Email</th>
          <th>adhaar_number</th>
          <th>registration_date</th>
          <th>mobile_number</th>
          <th>plan_id</th>
          <th>plan_name</th>
          <th>plan_cost</th>
          <th>plans_validity</th>
          <th>status</th>
        </tr>
        </thead>
        <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.dob}</td>
            <td>{customer.email}</td>
            <td>{customer.adhar_number}</td>
            <td>{customer.registration_date}</td>
            <td>{customer.mobile_number}</td>
            <td>{customer.plan_id}</td>
            <td>{customer.plan_name}</td>
            <td>{customer.plan_cost}</td>
            <td>{customer.plans_validity}</td>
            <td>{customer.plans_status}</td>
          </tr>
        ))}
     </tbody>
    </Table>
  );
}

export default CustomerTable;