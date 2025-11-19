import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/opportunities" element={<Oppprtunities />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
