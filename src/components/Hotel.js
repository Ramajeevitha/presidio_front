import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Hotel.css";
import heroImage from "../assets/hostel-hero.jpg";

export default function Hotel() {
  return (
    <div className="hotel-container">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-text">
          <h1>Welcome to JEE Hostel</h1>
          <p>
            Where elegance meets relaxation — welcome to your home away from home
          </p>
          {/* ✅ use Link instead of <a> */}
          <Link to="/rooms" className="btn-cta">
            Search Rooms
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Comfortable Rooms</h3>
            <p>
              Spacious and fully furnished rooms to ensure a focused environment.
            </p>
          </div>
          <div className="feature-card">
            <h3>Mess & Food</h3>
            <p>
              Healthy and hygienic meals prepared daily by experienced chefs.
            </p>
          </div>
          <div className="feature-card">
            <h3>24/7 Security</h3>
            <p>
              Safe hostel premises with CCTV and security guards for your safety.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@jeehostel.com | Phone: +91 98765 43210</p>
        <p>Address: 123 JEE Road, Education City, India</p>
        <a href="mailto:info@jeehostel.com" className="btn-cta">
          Get in Touch
        </a>
      </section>
    </div>
  );
}
