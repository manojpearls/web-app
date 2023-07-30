import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { Routes, Switch } from 'react-router';
import Transactions from './components/Transactions';
import Dashboard from './components/Dashboard';
import Goals from './components/Goals';

function App() {
  const [activeLink, setActiveLink] = useState('/');
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="main-content">
          <TopNav setActiveLink={setActiveLink} activeLink={activeLink} />
          <Routes>
            <Route path="/transactions" Component={Transactions} />
            <Route path="/goals" Component={Goals}></Route>
            <Route path="/" exact Component={Dashboard}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
