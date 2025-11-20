// src/pages/Opportunities.jsx
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./Opportunities.css";

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  async function fetchOpportunities() {
    try {
      const { data, error } = await supabase
        .from("volunteer_opportunities")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      setOpportunities(data || []);
    } catch (error) {
      console.error("Error fetching opportunities:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="opportunities-page loading">
        <div className="loading-text">Loading opportunities...</div>
      </div>
    );
  }

  return (
    <div className="opportunities-page">
      <div className="opportunities-container">
        <h1 className="page-title">Volunteer Opportunities</h1>
        <p className="page-subtitle">
          Find the perfect volunteering opportunity that matches your interests
          and schedule
        </p>

        {opportunities.length === 0 ? (
          <div className="no-opportunities">
            <p className="no-opportunities-title">
              No opportunities available at the moment.
            </p>
            <p className="no-opportunities-text">
              Check back soon for new volunteer events!
            </p>
          </div>
        ) : (
          <div className="opportunities-grid">
            {opportunities.map((opp) => (
              <div key={opp.id} className="opportunity-card">
                <h2 className="card-title">{opp.title}</h2>
                <p className="card-description">{opp.description}</p>

                <div className="card-details">
                  <div className="card-detail">
                    <span className="detail-icon">📅</span>
                    <span className="detail-text">
                      {new Date(opp.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="card-detail">
                    <span className="detail-icon">📍</span>
                    <span className="detail-text">{opp.location}</span>
                  </div>

                  <div className="card-detail">
                    <span className="detail-icon">👥</span>
                    <span className="detail-text">
                      {opp.volunteers_registered || 0} / {opp.volunteers_needed}{" "}
                      volunteers
                    </span>
                  </div>
                </div>

                <Link
                  to={`/volunteer?opportunity=${opp.id}`}
                  className="card-button"
                >
                  Sign Up
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
