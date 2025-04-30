import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Main from './pages/home.js';
import RegistrationPage from './pages/User/registration.js';
import Calculator from './pages/Investment/Calculator.js';
import Navbar from './Layouts/navbar.js';
import UserDashboard from './pages/User/dashboard.js';
import InsuranceForm from './pages/Insurance/insPurchase-start.js';
import DetailedForm from './pages/Insurance/insPurchase.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/InsuranceForm" element={<InsuranceForm />} />
        <Route path="/DetailedForm" element={<DetailedForm />} />
      </Routes>
    </>
  );
}

export default App;
