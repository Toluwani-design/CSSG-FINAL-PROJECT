// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Triangle Volunteering
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/opportunities" className="navbar-link">
            Opportunities
          </Link>
          <Link to="/volunteer" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
