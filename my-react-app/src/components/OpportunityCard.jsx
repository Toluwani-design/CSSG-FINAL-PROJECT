import React from "react";

export default function OpportunityCard({ opp, onSignUp }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: "1rem",
        margin: "1rem",
        background: "#fff",
        maxWidth: 400,
      }}
    >
      <h2>{opp.title}</h2>
      <p>{opp.description}</p>
      <p>
        <strong>Date:</strong> {opp.date}
      </p>
      <p>
        <strong>Location:</strong> {opp.location}
      </p>
      <p>
        <strong>Volunteers:</strong> {opp.volunteers_registered} /{" "}
        {opp.volunteers_needed}
      </p>
      <button onClick={() => onSignUp(opp.id)}>Sign Up</button>
    </div>
  );
}
