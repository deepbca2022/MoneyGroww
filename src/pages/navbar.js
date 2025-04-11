import React from 'react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#2e7d32', // dark green
    padding: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '29px',
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    color: 'white',
    fontWeight: "medium",
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>Finance Portal</div>
        <ul style={ulStyle}>
          {['SIP', 'SWP', 'Insurance', 'Claims', 'Grievances'].map((item) => (
            <li
              key={item}
              style={liStyle}
              onMouseEnter={(e) => (e.target.style.color = '#33fff6')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
