import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    occupation: '',
    termsAccepted: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
    } else if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions");
    } else {
      setError('');
      alert("Registration Successful!");
      console.log(formData);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f3f3',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '90%',
    maxWidth: '600px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0 15px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Registration</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <label style={labelStyle}>Full Name:</label>
        <input style={inputStyle} type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label style={labelStyle}>Username:</label>
        <input style={inputStyle} type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label style={labelStyle}>Email:</label>
        <input style={inputStyle} type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label style={labelStyle}>Phone:</label>
        <input style={inputStyle} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label style={labelStyle}>Date of Birth:</label>
        <input style={inputStyle} type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label style={labelStyle}>Gender:</label>
        <select style={inputStyle} name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label style={labelStyle}>Password:</label>
        <input style={inputStyle} type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label style={labelStyle}>Confirm Password:</label>
        <input style={inputStyle} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

        <label style={labelStyle}>Address:</label>
        <input style={inputStyle} type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label style={labelStyle}>City:</label>
        <input style={inputStyle} type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label style={labelStyle}>State:</label>
        <input style={inputStyle} type="text" name="state" value={formData.state} onChange={handleChange} required />

        <label style={labelStyle}>Country:</label>
        <input style={inputStyle} type="text" name="country" value={formData.country} onChange={handleChange} required />

        <label style={labelStyle}>Pincode:</label>
        <input style={inputStyle} type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />

        <label style={labelStyle}>Occupation:</label>
        <input style={inputStyle} type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />

        <div style={{ marginBottom: '15px' }}>
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <label style={{ marginLeft: '8px' }}>I accept the terms and conditions</label>
        </div>

        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
}
