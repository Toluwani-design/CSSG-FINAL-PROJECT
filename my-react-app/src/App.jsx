// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import VolunteerForm from "./pages/VolunteerForm";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedOppId, setSelectedOppId] = useState(null);

  function handleNavigate(newPage) {
    setPage(newPage);
    if (newPage !== "form") setSelectedOppId(null);
  }

  function handleSignUp(oppId) {
    setSelectedOppId(oppId);
    setPage("form");
  }

  function handleFormSubmit(formData) {
    alert("Thank you for signing up, " + formData.name + "!");
    setPage("home");
  }

  return (
    <div>
      <Navbar onNavigate={handleNavigate} />
      {page === "home" && <Home />}
      {page === "opportunities" && <Opportunities onSignUp={handleSignUp} />}
      {page === "form" && (
        <VolunteerForm
          opportunityId={selectedOppId}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}
