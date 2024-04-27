import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function ChangePlanForm() {
  const [customerId, setCustomerId] = useState('');
  const [planId, setPlanId] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success'); // Set default to success

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('http://localhost:8000/change_plan', {
        customer_id: customerId,
        plan_id: planId,
      });

      if (response.status === 200) {
        setAlertVariant('success');
        setAlertMessage('Plan changed successfully!');
      } else {
        setAlertVariant('danger');
        setAlertMessage('Error changing plan. Please try again.');
      }
    } catch (error) {
      setAlertVariant('danger');
      setAlertMessage('Error changing plan. Please try again.');
    }
  };

  const handleAlertClose = () => {
    setAlertMessage('');
  };

  return (
    <>
      {alertMessage && (
        <Alert variant={alertVariant} onClose={handleAlertClose} dismissible>
          {alertMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="customerId">
          <Form.Label>Customer ID</Form.Label>
          <Form.Control
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="planId">
          <Form.Label>Plan ID</Form.Label>
          <Form.Control
            type="text"
            value={planId}
            onChange={(e) => setPlanId(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Change Plan
        </Button>
      </Form>
    </>
  );
}

export default ChangePlanForm;