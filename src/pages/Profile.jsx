import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users") 
      .then((res) => {
        if (res.data.length > 0) {
          setUser(res.data[0]); // pick the first user
        } else {
          setUser(null); // no users found
        }
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  if (!user) {
    return <p className="text-center">Loading profile...</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="space-y-2">
        <p><strong>ID:</strong> {user._id}</p>
        <p><strong>First Name:</strong> {user.first_name}</p>
        <p><strong>Last Name:</strong> {user.last_name}</p>
        <p><strong>Date of Birth:</strong> {user.dob ? user.dob : "Not Provided"}</p>
        <p><strong>Phone:</strong> {user.ph_no}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Aadhar No:</strong> {user.aadhar_no}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}
