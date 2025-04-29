import React from 'react';


export default function UserDashboard() {
  const userData = {
    fullName: 'John Doe',
    username: 'johnny123',
    email: 'john@example.com',
    phone: '1234567890',
    dob: '1995-06-15',
    gender: 'Male',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    pincode: '10001',
    occupation: 'Software Engineer',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f6fa',
      minHeight: '100vh',
      padding: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dashboard: {
      width: '100%',
      maxWidth: '900px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      padding: '40px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '20px',
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '28px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '20px',
    },
    greeting: {
      fontSize: '22px',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '25px 0 10px',
      color: '#333',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
    },
    card: {
      backgroundColor: '#f1f3f5',
      borderRadius: '10px',
      padding: '15px 20px',
      fontSize: '15px',
    },
    label: {
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '4px',
      color: '#555',
    },
    value: {
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.avatar}>
            {userData.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={styles.greeting}>Welcome, {userData.fullName} 👋</div>
            <div style={{ color: '#777' }}>Dashboard Overview</div>
          </div>
        </div>

        {/* Personal Info */}
        <div style={styles.sectionTitle}>Personal Information</div>
        <div style={styles.infoGrid}>
          <div style={styles.card}>
            <span style={styles.label}>Full Name</span>
            <span style={styles.value}>{userData.fullName}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Username</span>
            <span style={styles.value}>{userData.username}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Date of Birth</span>
            <span style={styles.value}>{userData.dob}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Gender</span>
            <span style={styles.value}>{userData.gender}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Occupation</span>
            <span style={styles.value}>{userData.occupation}</span>
          </div>
        </div>

        {/* Contact Info */}
        <div style={styles.sectionTitle}>Contact Information</div>
        <div style={styles.infoGrid}>
          <div style={styles.card}>
            <span style={styles.label}>Email</span>
            <span style={styles.value}>{userData.email}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Phone</span>
            <span style={styles.value}>{userData.phone}</span>
          </div>
        </div>

        {/* Address Info */}
        <div style={styles.sectionTitle}>Location Details</div>
        <div style={styles.infoGrid}>
          <div style={styles.card}>
            <span style={styles.label}>Address</span>
            <span style={styles.value}>{userData.address}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>City</span>
            <span style={styles.value}>{userData.city}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>State</span>
            <span style={styles.value}>{userData.state}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Country</span>
            <span style={styles.value}>{userData.country}</span>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Pincode</span>
            <span style={styles.value}>{userData.pincode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
