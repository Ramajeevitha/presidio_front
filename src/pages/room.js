import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Rooms() {
  const navigate = useNavigate();

  const [room, setRoom] = useState({
    room_number: "",
    room_type: "",
    price: "",
    capacity: "",
    status: "available", // default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/rooms", room);
      alert(res.data.message || "Room saved successfully!");
      navigate("/"); // redirect to home page
    } catch (err) {
      console.error("Error saving room:", err.response?.data || err.message);
      alert("Error saving room: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add/Search Room</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Room Number</label>
          <input
            type="text"
            name="room_number"
            className="form-control"
            value={room.room_number}
            onChange={handleChange}
            placeholder="Enter room number"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Room Type</label>
          <input
            type="text"
            name="room_type"
            className="form-control"
            value={room.room_type}
            onChange={handleChange}
            placeholder="Enter room type"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={room.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input
            type="number"
            name="capacity"
            className="form-control"
            value={room.capacity}
            onChange={handleChange}
            placeholder="Enter capacity"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-control"
            value={room.status}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Room
        </button>
      </form>
    </div>
  );
}
