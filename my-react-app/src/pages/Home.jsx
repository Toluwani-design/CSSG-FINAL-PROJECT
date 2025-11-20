// src/pages/Home.jsx

import React from "react";

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-blue-600">Triangle Volunteering</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our mission is to connect passionate volunteers with local needs in
            the Triangle area. Join us for food drives, park cleanups, and
            school events that make a real difference in our community.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to make a difference?
            </h2>
            <p className="text-gray-600 mb-6">
              Every volunteer makes an impact. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate("opportunities")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Find Opportunities
              </button>
              <button
                onClick={() => onNavigate("form")}
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Volunteer With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Make a real difference in the Triangle area community
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                Find opportunities that fit your availability
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Personal Growth
              </h3>
              <p className="text-gray-600">
                Develop new skills while helping others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
