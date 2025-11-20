// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Triangle Volunteering</h1>
          <p className="hero-subtitle">
            Making a difference in our community, one volunteer at a time
          </p>
          <Link to="/opportunities" className="hero-button">
            Find Opportunities
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            Triangle Volunteering connects passionate volunteers with meaningful
            opportunities throughout the Triangle area. From food drives to
            environmental clean-ups and school events, we're dedicated to
            strengthening our community through service.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Active Volunteers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Events Organized</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Community Partners</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Make a Difference?</h2>
          <p className="cta-text">
            Join our community of volunteers and help us build a better Triangle
            area
          </p>
          <Link to="/volunteer" className="cta-button">
            Sign Up Today
          </Link>
        </div>
      </section>
    </div>
  );
}
