import React from "react";

const FinGroww = () => {
  const styles = {
    container: {
      backgroundColor: "white",
      color: "black",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "2rem",
    },
    hero: {
      backgroundColor: "white",
      textAlign: "center",
      padding: "20px",
      borderRadius: "10px",
      margin: "20px",
    },
    infoSection: {
      padding: "20px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    buttonContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "15px",
      padding: "20px",
    },
    button: {
      backgroundColor: "#ccff00",
      color: "#000",
      fontWeight: "bold",
      padding: "10px",
      border: "none",
      borderRadius: "10px",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Get Financially Independent
        </h2>
        <p style={{ marginTop: "10px" }}>
          Invest Your money in the correct way and retire with a crore in the account
        </p>
      </div>

      {/* Info Section */}
      <div style={styles.infoSection}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
          Investing Made Simple, Smart & Secure
        </h3>
        <p>
          Welcome to FinGroww, your all-in-one platform to invest in stocks, mutual
          funds, and more — all from the comfort of your phone. Whether you're just
          starting out or already growing your portfolio, we make investing easy,
          transparent, and hassle-free.
        </p>
        <ul style={styles.list}>
          <li>Zero paperwork – Open your account in minutes</li>
          <li>Invest your way – Stocks, mutual funds, ETFs & more</li>
          <li>Track & grow – Real-time insights to manage your wealth</li>
          <li>Safe & secure – Bank-grade encryption and fast UPI payments</li>
          <li>Learn & earn – Get smarter with investing guides, videos & tips</li>
        </ul>
        <p>
          Start your journey to financial freedom today – simple, smart, and just a
          tap away.
        </p>
      </div>

      {/* Buttons Section */}
      <div style={styles.buttonContainer}>
        {[
          "Open Demat Account",
          "Trade Stocks",
          "Start SIP",
          "Withdraw using SWP",
          "Get Insured with less Premium",
          "Personalised Finance Planning",
        ].map((label) => (
          <button key={label} style={styles.button}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FinGroww;
