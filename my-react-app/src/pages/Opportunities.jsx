// src/pages/Opportunities.jsx
import React, { useState, useEffect } from "react";
import OpportunityCard from "../components/OpportunityCard";
import { supabase } from "../supabaseClient";

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
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Volunteer Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect volunteering opportunity that matches your
            interests and schedule. Every contribution makes a difference.
          </p>
        </div>

        {opportunities.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No opportunities available
              </h3>
              <p className="text-gray-600">
                Check back soon for new volunteer opportunities!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opp={opp} onSignUp={onSignUp} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
