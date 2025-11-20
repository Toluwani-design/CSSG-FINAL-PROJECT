// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">
              Triangle Volunteering
            </span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => onNavigate("home")}
              className="text-blue-100 hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("opportunities")}
              className="text-blue-100 hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Opportunities
            </button>
            <button
              onClick={() => onNavigate("form")}
              className="bg-blue-800 text-white hover:bg-blue-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
