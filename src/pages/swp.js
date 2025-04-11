import React, { useState } from 'react';

const SWPCalculator = () => {
  const [investment, setInvestment] = useState('');
  const [rate, setRate] = useState('');
  const [withdrawal, setWithdrawal] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState(null);

  const calculateSWP = () => {
    let balance = parseFloat(investment);
    const monthlyRate = parseFloat(rate) / 12 / 100;
    let totalWithdrawn = 0;

    for (let i = 0; i < months; i++) {
      const returns = balance * monthlyRate;
      balance = balance + returns - parseFloat(withdrawal);
      totalWithdrawn += parseFloat(withdrawal);
      if (balance <= 0) {
        balance = 0;
        break;
      }
    }

    setResult({
      totalWithdrawn: totalWithdrawn.toFixed(2),
      finalBalance: balance.toFixed(2),
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4" style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'left' , border: '2px solid black', borderRadius: '10px',padding:'10px' }}>
      <div style={{backgroundColor: 'pink', paddingLeft: '5px' , border: 'none', borderRadius: '3px'}}><h2>SWP Calculator</h2></div>

      <div style={{ marginBottom: '10px' }}>
        <label>Initial Investment (₹): </label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div>
      

<div style={{ marginBottom: '10px' }}>
        <label>Annual Return Rate (%): </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

<div style={{ marginBottom: '10px' }}>
        <label>Monthly Withdrawal (₹): </label>
        <input
          type="number"
          value={withdrawal}
          onChange={(e) => setWithdrawal(e.target.value)}
        />
      </div>

<div style={{ marginBottom: '10px' }}>
        <label>Duration (months): </label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>

      <div style={{marginLeft:'180px'}}>
        <button onClick={calculateSWP} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Calculate
      </button>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>Total Withdrawn: ₹{result.totalWithdrawn}</p>
          <p>Final Balance: ₹{result.finalBalance}</p>
        </div>
      )}
    </div>
  );
};

export default SWPCalculator;
