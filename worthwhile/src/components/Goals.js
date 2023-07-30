import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import logo_icon from '../assets/logo_worthwhile.png';

const Goals = () => {
  const [accounts, setAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [newGoalName, setNewGoalName] = useState('');
  const [selectedGoalType, setSelectedGoalType] = useState(null);

  useEffect(() => {
    // Make the API call to fetch the data
    axios
      .get('https://hkqgxmngok.execute-api.ap-south-1.amazonaws.com/dev/goals')
      .then((response) => {
        // Set the fetched accounts to the state
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching accounts:', error);
      });
  }, []);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  // Function to handle form submission for adding a new goal
  const handleSubmit = () => {
    // Prepare the data for the POST request
    const data = `Goal ${newGoalName}`;

    // Create a new instance of XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hkqgxmngok.execute-api.ap-south-1.amazonaws.com/dev/goals');
    xhr.setRequestHeader('Content-Type', 'text/plain');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('New goal added:', xhr.responseText);
          // Refresh the page after successful saving
          window.location.reload();
        } else {
          console.error('Error adding new goal:', xhr.status);
        }
      }
    };

    // Send the request manually
    xhr.send(data);
  };

  return (
    <div>
      <div className="hero-title text-center mb-2">
        <h1 className="display-6">Your Goals</h1>
      </div>
      {/* Add Card - Add Goal */}
      <div className="d-flex flex-wrap justify-content-center">
        {accounts.map((account) => (
          <CCard key={account.accountId} className="m-3" style={{ width: '18rem' }}>
            {/* <CCardImage orientation="top" src={logo_icon} /> */}
            <CCardBody>
              <CCardTitle>{account.accountName}</CCardTitle>
              <CButton href="/transactions">View Transactions</CButton>
            </CCardBody>
          </CCard>
        ))}
        {/* Add Goal Card */}
        <CCard
          className="m-3"
          style={{ width: '18rem', cursor: 'pointer' }}
          onClick={toggleModal}
        >
          {/* <CCardImage orientation="top" src={logo_icon} /> */}
          <CCardBody className="text-center">
            <i className="fas fa-plus-circle fa-4x"></i>
            <CCardTitle>Add Goal</CCardTitle>
            <CCardTitle>Click to add a new goal</CCardTitle>
          </CCardBody>
        </CCard>
      </div>
      {/* Modal to add a new goal */}
      <CModal
        alignment="center"
        visible={showModal}
        onClose={toggleModal}
        onClosed={() => {
          // Reset the form input fields when the modal is closed
          setNewGoalName('');
          setSelectedGoalType(null);
        }}
      >
        <CModalHeader>
          <CModalTitle>Add New Goal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="form-group">
            <label htmlFor="newGoalName">Goal Name</label>
            <input
              type="text"
              className="form-control"
              id="newGoalName"
              value={newGoalName}
              onChange={(e) => setNewGoalName(e.target.value)}
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={toggleModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSubmit}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Goals;
