import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

  const DetailedForm = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        fullName: location.state.name,
        phone: location.state.phone,
        email: location.state.email,
        dob: location.state.dob,
      }));
    }
  }, [location.state]);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    aadhar: "",
    passport: "",
    pan: "",
    addressProof: "",
    education: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    spouseName: "",
    children: "",
    occupation: "",
    income: "",
    workMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({});
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "1100px",
      margin: "30px auto",
      padding: "20px",
    },
    section: {
      marginBottom: "30px",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    inputRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "20px",
    },
    inputBox: {
      flex: "1 1 30%",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "5px",
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    select: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    buttonRow: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#3c85fc",
      color: "#fff",
      cursor: "pointer",
    },
    resetButton: {
      backgroundColor: "#ccc",
      color: "#000",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Personal Information</div>
          <div style={styles.inputRow}>
            <div style={styles.inputBox}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Name"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Phone No</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>DOB</label>
              <input
                type="date"
                name="dob"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Gender</label>
              <select
                name="gender"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Aadhar No</label>
              <input
                type="text"
                name="aadhar"
                placeholder="Enter Aadhar No"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Passport Number</label>
              <input
                type="text"
                name="passport"
                placeholder="Enter Passport No"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>PAN Card No</label>
              <input
                type="text"
                name="pan"
                placeholder="Enter PAN No"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Address Proof</label>
              <select
                name="addressProof"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Choose Address Proof</option>
                <option value="Voter ID">Voter ID</option>
                <option value="Driving License">Driving License</option>
                <option value="Utility Bill">Utility Bill</option>
              </select>
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Highest Level Of Education</label>
              <select
                name="education"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Enter Highest level of Education</option>
                <option value="High School">High School</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Family Information */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Family Information</div>
          <div style={styles.inputRow}>
            <div style={styles.inputBox}>
              <label style={styles.label}>Father's Name</label>
              <input
                type="text"
                name="fatherName"
                placeholder="Enter Father's Name"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Mother's Name</label>
              <input
                type="text"
                name="motherName"
                placeholder="Enter Mother's Name"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Marital Status</label>
              <select
                name="maritalStatus"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Enter Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Spouse's Name</label>
              <input
                type="text"
                name="spouseName"
                placeholder="Enter Spouse Name"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>No. of Children</label>
              <select
                name="children"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Enter no of Children</option>
                {[...Array(10).keys()].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Income Information */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Income Information</div>
          <div style={styles.inputRow}>
            <div style={styles.inputBox}>
              <label style={styles.label}>Occupation Type</label>
              <select
                name="occupation"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Enter Occupation Type</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
              </select>
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Annual Income</label>
              <select
                name="income"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Enter Salary</option>
                <option value="Less than 5L">Less than 5L</option>
                <option value="5L - 10L">5L - 10L</option>
                <option value="10L - 20L">10L - 20L</option>
                <option value="20L+">20L+</option>
              </select>
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Work Mode</label>
              <select
                name="workMode"
                style={styles.select}
                onChange={handleChange}
              >
                <option value="">Enter Work Mode</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonRow}>
          <button type="submit" style={styles.button}>
            Submit Form
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{ ...styles.button, ...styles.resetButton }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};


export default DetailedForm;
