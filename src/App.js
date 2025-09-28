import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hotel from "./components/Hotel";
import Profile from "./pages/Profile";
import Rooms from "./pages/room";  

function App() {
  return (
    <Router>
      <Navbar />

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/profile" element={<Profile />} />

          {/* ✅ frontend page for rooms */}
          <Route path="/rooms" element={<Rooms />} />

          <Route
            path="*"
            element={
              <div className="text-center mt-5">
                <h2>404 - Page Not Found</h2>
              </div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
