import React, { useEffect, useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCallout,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react';

const vars = {
  '--cui-callout-margin-x': 0,
  '--cui-callout-margin-y': 0,
};

const co2 = {
  color: 'grey',
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    fetch('https://hkqgxmngok.execute-api.ap-south-1.amazonaws.com/dev/transactions/any')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleViewProducts = (transaction) => {
    setSelectedTransaction(transaction);
    setVisible(true);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    setVisible(false);
  };

  return (
    <div style={{ maxHeight: '600px', overflowY: 'auto', margin: '20px' }}>
      <CTable className="table table-sm">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Transaction ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Transaction Code</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {transactions.map((transaction) => (
            <CTableRow key={transaction.transactionId}>
              <CTableDataCell scope="row" style={{ fontWeight: 'normal' }}>
                {transaction.transactionId}
              </CTableDataCell>
              <CTableDataCell>{transaction.transactionCode}</CTableDataCell>
              <CTableDataCell>
                <CCallout
                  color={transaction.ecoProduct ? 'success' : 'light'}
                  style={vars}
                >
                  {transaction.description} <br />
                  <span style={co2}>CO2kg: {transaction.carbonEmission}</span>
                  {!transaction.ecoProduct && (
                    <div style={{ marginTop: '10px' }}>
                      <CButton
                        color="success"
                        onClick={() => handleViewProducts(transaction)}
                      >
                        Alternate ECO Products
                      </CButton>
                    </div>
                  )}
                </CCallout>
              </CTableDataCell>
              <CTableDataCell>{transaction.amount}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Alternate Products</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedTransaction &&
            selectedTransaction.alternateProduct &&
            selectedTransaction.alternateProduct.map((product, index) => (
              <div key={index}>
                <p>
                  <strong>Product Name:</strong> {product.productName}
                </p>
                <p>
                  <strong>CO2 Emission:</strong> {product.carbonEmission} kg
                </p>
                <p>
                  <a href="#">Read more</a>
                </p>
                <hr />
              </div>
            ))}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Transactions;
