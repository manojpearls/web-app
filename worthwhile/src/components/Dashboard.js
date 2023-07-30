import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton
} from '@coreui/react';
import logo_icon from '../assets/logo_worthwhile.png';
import Stats from './Stats';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Make the API call to fetch the data
    axios.get('https://hkqgxmngok.execute-api.ap-south-1.amazonaws.com/dev/accounts')
      .then(response => {
        // Set the fetched accounts to the state
        setAccounts(response.data);
      })
      .catch(error => {
        console.error('Error fetching accounts:', error);
      });
  }, []);

  return (
    <div>
      <div>
        <Stats />
      </div>
      <div className="hero-title text-center mb-2">
        <h1 className="display-6">Your Accounts</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {accounts.map(account => (
          <CCard key={account.accountId} className="m-3" style={{ width: '18rem' }}>
            {/* <CCardImage orientation="top" src={logo_icon} /> */}
            <CCardBody>
              <CCardTitle>{account.accountName}</CCardTitle>
              <CCardText>
                {account.description}
              </CCardText>
              <CButton href="/transactions">View Transactions</CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
