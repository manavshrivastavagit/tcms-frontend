import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function PlansTable() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get('http://localhost:8000/plans');
      setPlans(response.data);
    };
    fetchCustomers();
  }, []);

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
          <th>plan_id</th>
          <th>plan_name</th>
          <th>plan_cost</th>
          <th>plans_validity</th>
          <th>status</th>
        </tr>
        </thead>
        <tbody>
        {plans.map((plan) => (
          <tr key={plan.plan_id}>
            <td>{plan.plan_id}</td>
            <td>{plan.plan_name}</td>
            <td>{plan.plan_cost}</td>
            <td>{plan.plans_validity}</td>
            <td>{plan.plans_status}</td>
          </tr>
        ))}
     </tbody>
    </Table>
  );
}

export default PlansTable;