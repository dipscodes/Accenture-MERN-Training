import React, { useState, useRef } from "react";

const CustomerComponentTask = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const countryRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setForm({ ...form, [name]: value });
        setPhoneError("");
      } else {
        setPhoneError("It should be a number");
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCountry = countryRef.current.value;
    console.log("Form submitted:", {
      ...form,
      country: selectedCountry,
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        textAlign: "center",
        border: "2px solid black",
      }}
    >
      <h2>Customer Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Customer First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Add first name"
            value={form.firstName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Customer Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Add last name"
            value={form.lastName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Customer Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder=""
            value={form.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {phoneError && (
            <p style={{ color: "red", fontSize: "12px" }}>{phoneError}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Country</label>
          <select
            ref={countryRef}
            defaultValue=""
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="" disabled>
              select
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomerComponentTask;
