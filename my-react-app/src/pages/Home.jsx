// src/pages/Home.jsx

import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Triangle Volunteering!</h1>
      <p>
        Our mission is to connect passionate volunteers with local needs in the
        Triangle area. Join us for food drives, park cleanups, and school
        events!
      </p>
      <div
        style={{
          margin: "2rem 0",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        <span>Ready to make a difference?</span>
      </div>
    </div>
  );
}
