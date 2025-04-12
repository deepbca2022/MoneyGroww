import React from 'react';
import homeImage from './images/home page pic1.jpg'; // Adjust if you rename the file

function Main() {
  return (
    <>
      <p>Home Page</p>
      <div className='topPart' style={{ display: 'flex', height: '400px' }}>
        <div
          className='topPartLeft'
          style={{
            padding: '20px',
            backgroundColor: 'blue',
            width: '50%',
            color: 'white',
          }}
        >
          <h3>Lorem lorem lorem lorem lorem lorem lorem lorem</h3>
        </div>
        <div style={{ width: '50%' }}>
          <img
            src={homeImage}
            alt='Family'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
