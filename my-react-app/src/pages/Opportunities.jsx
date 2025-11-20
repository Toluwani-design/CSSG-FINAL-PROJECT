// src/pages/Opportunities.jsx
import React, { useState, useEffect } from "react";
import OpportunityCard from "../components/OpportunityCard";
import { supabase } from "../supabaseClient";
import "./Opportunities.css";

export default function Opportunities({ onSignUp }) {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOpportunities() {
      const { data, error } = await supabase
        .from("volunteer_opportunities")
        .select("*")
        .order("date", { ascending: true });
      if (error) {
        setOpportunities([]);
      } else {
        setOpportunities(data || []);
      }
      setLoading(false);
    }
    fetchOpportunities();
  }, []);

  if (loading) {
    return <div style={{ padding: "2rem" }}>Loading opportunities...</div>;
  }

  return (
    <div className="opportunities-page">
      <div className="opportunities-container">
        <h1 className="page-title">Volunteer Opportunities</h1>
        <p className="page-subtitle">
          Find the perfect volunteering opportunity that matches your interests
          and schedule
        </p>
        <div className="opportunities-grid">
          {opportunities.length === 0 ? (
            <div>No opportunities available.</div>
          ) : (
            opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opp={opp} onSignUp={onSignUp} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
