import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Main from './pages/home.js';
import RegistrationPage from './pages/User/registration.js';
import Calculator from './pages/Investment/Calculator.js';
import Navbar from './Layouts/navbar.js';
import UserDashboard from './pages/User/dashboard.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
