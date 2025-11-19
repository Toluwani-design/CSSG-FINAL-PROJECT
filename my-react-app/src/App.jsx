import { useState } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
