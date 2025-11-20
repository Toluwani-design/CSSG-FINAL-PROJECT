// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import VolunteerForm from "./pages/VolunteerForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
