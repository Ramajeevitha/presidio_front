import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    ph_no: "",
    email: "",
    aadhar_no: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/users", user);
      alert(res.data.message || "Profile saved successfully!");
      navigate("/"); // redirect to home
    } catch (err) {
      console.error("Error saving profile:", err.response?.data || err.message);
      alert(
        "Error saving profile: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            value={user.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            value={user.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={user.dob}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="ph_no"
            className="form-control"
            value={user.ph_no}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Aadhar Number</label>
          <input
            type="text"
            name="aadhar_no"
            className="form-control"
            value={user.aadhar_no}
            onChange={handleChange}
            placeholder="Enter Aadhar number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            className="form-control"
            value={user.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Profile
        </button>
      </form>
    </div>
  );
}
