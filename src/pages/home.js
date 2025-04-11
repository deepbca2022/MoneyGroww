import React, { useState } from 'react';
import SIPCalulator from './sip.js';
import SWPCalculator from './swp.js';
import Navbar from './navbar.js';

function Main() {
  const [selected, setSelected] = useState('SIP');

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div style={{ display: 'flex', gap: '10px', margin: '16px' }}>
        <button
          style={{
            border: '1px solid black',
            borderRadius: '2px',
            backgroundColor: selected === 'SIP' ? '#81c784' : 'white',
            padding: '8px 16px',
            cursor: 'pointer'
          }}
          onClick={() => setSelected('SIP')}
        >
          SIP Calculator
        </button>

        <button
          style={{
            border: '1px solid black',
            borderRadius: '2px',
            backgroundColor: selected === 'SWP' ? '#81c784' : 'white',
            padding: '8px 16px',
            cursor: 'pointer'
          }}
          onClick={() => setSelected('SWP')}
        >
          SWP Calculator
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {selected === 'SIP' && <SIPCalulator />}
        {selected === 'SWP' && <SWPCalculator />}
      </div>
    </>
  );
}

export default Main;
