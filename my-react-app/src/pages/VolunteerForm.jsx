// src/pages/VolunteerForm.jsx
import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function VolunteerForm({ opportunityId, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.from("volunteer_signups").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          opportunity_id: opportunityId,
        },
      ]);
      if (error) throw error;
      setSuccess(true);
      onSubmit(form);
    } catch (err) {
      setError("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "2rem",
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <h1>Sign Up to Volunteer</h1>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{
          display: "block",
          margin: "1rem 0",
        }}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{
          display: "block",
          margin: "1rem 0",
        }}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
        style={{
          display: "block",
          margin: "1rem 0",
        }}
      />
      <button type="submit" disabled={loading}>
        Submit
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && (
        <div style={{ color: "green" }}>Thank you for signing up!</div>
      )}
    </form>
  );
}
