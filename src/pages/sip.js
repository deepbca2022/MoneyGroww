import { useState } from 'react';

//use state is used for containing value of a input field
function SIPCalulator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualReturnRate, setAnnualReturnRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [totalValue, setTotalValue] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturnRate) / 12 / 100;
    const n = parseFloat(investmentPeriod) * 12;

    if (!P || !r || !n) {
      setTotalValue(null);
      return;
    }

    const futureValue = P * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    setTotalValue(futureValue.toFixed(2));
  };

  return (
    <div className="App" style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'left' , border: '2px solid black', borderRadius: '10px',padding:'10px' }}>
      <div style={{backgroundColor: 'pink', paddingLeft: '5px' , border: 'none', borderRadius: '3px'}}><h2>SIP Calculator</h2></div>
      <div style={{ marginBottom: '10px' }}>
        <label>Monthly Investment (₹): </label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Expected Annual Return (%): </label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Investment Period (Years): </label>
        <input 
          type="number"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(e.target.value)}
        />
      </div>
      <div style={{marginLeft:'180px'}}><button onClick={calculateSIP}>Calculate</button></div>

      {totalValue && (
        <div style={{ marginTop: '20px' }}>
          <h3>Total Future Value: ₹{totalValue}</h3>
        </div>
      )}
      
    </div>
  );
}

export default SIPCalulator;
