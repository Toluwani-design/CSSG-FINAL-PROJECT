import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the React Website!</h1>
      <p>
        This site is built with React and Vite. Here you can find information
        about our project, opportunities, and ways to volunteer.
      </p>
      <ul>
        <li>Fast and modern web development with React</li>
        <li>Powered by Vite for lightning-fast builds</li>
        <li>Explore opportunities and get involved</li>
      </ul>
      <img
        src="/vite.svg"
        alt="Vite Logo"
        style={{ width: "100px", marginRight: "20px" }}
      />
      <img
        src={require("./assets/react.svg")}
        alt="React Logo"
        style={{ width: "100px" }}
      />
    </div>
  );
}

export default Home;
