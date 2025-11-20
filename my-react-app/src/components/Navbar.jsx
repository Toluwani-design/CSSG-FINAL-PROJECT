// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        gap: "2rem",
      }}
    >
      <span style={{ fontWeight: "bold" }}>Triangle Volunteering</span>
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("opportunities")}>Opportunities</button>
      <button onClick={() => onNavigate("form")}>Sign Up</button>
    </nav>
  );
}
