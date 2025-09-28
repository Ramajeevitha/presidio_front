import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./Navbar.css";
import profileImg from "../assets/profile.jpg";

export default function Navbar() {
  const navigate = useNavigate(); 

  const goToProfile = () => {
    navigate("/profile"); 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Jee Hotel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>

          {/* Search + Profile */}
          <div className="d-flex align-items-center">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* Profile image with navigate() */}
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle ms-3"
              width="40"
              height="40"
              style={{ cursor: "pointer" }}
              onClick={goToProfile} // ✅ navigate on click
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
