import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InsuranceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    insuranceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const InsuranceForm = () => {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/detailed-form", { state: formData });
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f3f3ff",
      padding: "10px",
      borderRadius: "2px",
      maxWidth: "93vw",
      margin: "auto",
      marginTop: "20px",
    },
    titleBar: {
      backgroundColor: "#6e7b8b",
      color: "#ffe4e1",
      padding: "10px 20px",
      fontWeight: "bold",
      fontSize: "18px",
      borderRadius: "6px 6px 0 0",
    },
    formWrapper: {
      display: "flex",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "0 0 6px 6px",
    },
    leftPanel: {
      flex: 1,
      paddingRight: "20px",
      borderRight: "2px solid #e0e0e0",
    },
    rightPanel: {
      flex: 1,
      paddingLeft: "20px",
    },
    label: {
      fontWeight: "bold",
      marginTop: "10px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "8px",
      margin: "5px 0 15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    radioContainer: {
      marginTop: "10px",
    },
    radioLabel: {
      display: "block",
      marginBottom: "8px",
    },
    submitButton: {
      marginTop: "10px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#d3d3f9",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleBar}>INSURANCE PURCHASE FORM</div>
      <div style={styles.formWrapper}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <p>
            Get yourself, your loved ones and your assets protected and insured with
            <br />
            <br />
            dynamic Insurance policy's with lots of benefits and huge sum insured.
          </p>

          <div style={styles.inputBox}>
            <label style={styles.label}>Insurance Required</label>
            <select
                name="insuranceType"
                style={styles.select}
                onChange={handleChange}
                value={formData.insuranceType || ""}
            >
                <option value="">Select Insurance Type</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Term Insurance">Term Insurance</option>
                <option value="Business Insurance">Business Insurance</option>
                <option value="Motor Insurance">Motor Insurance</option>
                <option value="General Insurance">General Insurance</option>
            </select>
            </div>
        </div>

        {/* Right Panel */}
        <form style={styles.rightPanel} onSubmit={handleSubmit}>
          <label style={styles.label}>Enter Policy Holder's Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Enter Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone NO"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Enter Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            style={styles.input}
            onChange={handleChange}
          />

          <label style={styles.label}>Enter DOB</label>
          <input
            type="date"
            name="dob"
            style={styles.input}
            onChange={handleChange}
          />

          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
}

export default InsuranceForm;
