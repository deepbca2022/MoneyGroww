import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Main from './pages/home.js';
import Calculator from './pages/Calculator.js';
import Navbar from './Layouts/navbar.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
