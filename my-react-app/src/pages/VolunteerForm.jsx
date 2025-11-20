// src/pages/VolunteerForm.jsx
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./VolunteerForm.css";

export default function VolunteerForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const opportunityId = searchParams.get("opportunity");

  const [opportunities, setOpportunities] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    opportunityId: opportunityId || "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Insert volunteer signup
      const { error: signupError } = await supabase
        .from("volunteer_signups")
        .insert([
          {
            opportunity_id: formData.opportunityId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
        ]);

      if (signupError) throw signupError;

      // Update volunteer count
      const { data: opportunity } = await supabase
        .from("volunteer_opportunities")
        .select("volunteers_registered")
        .eq("id", formData.opportunityId)
        .single();

      if (opportunity) {
        await supabase
          .from("volunteer_opportunities")
          .update({
            volunteers_registered: (opportunity.volunteers_registered || 0) + 1,
          })
          .eq("id", formData.opportunityId);
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", opportunityId: "" });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/opportunities");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="volunteer-form-page">
      <div className="form-container">
        <h1 className="form-title">Volunteer Sign Up</h1>
        <p className="form-subtitle">
          Fill out the form below to register for a volunteer opportunity
        </p>

        {success ? (
          <div className="alert alert-success">
            <p className="alert-title">Success!</p>
            <p>Thank you for signing up! Redirecting you to opportunities...</p>
          </div>
        ) : (
          <div className="form-card">
            {error && <div className="alert alert-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="opportunityId" className="form-label">
                  Select Opportunity *
                </label>
                <select
                  id="opportunityId"
                  name="opportunityId"
                  value={formData.opportunityId}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Choose an opportunity...</option>
                  {opportunities.map((opp) => (
                    <option key={opp.id} value={opp.id}>
                      {opp.title} - {new Date(opp.date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="form-submit-button"
              >
                {loading ? "Submitting..." : "Sign Up"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
