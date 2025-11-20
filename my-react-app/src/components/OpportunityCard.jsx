import React from "react";

export default function OpportunityCard({ opp, onSignUp }) {
  const volunteersPercentage =
    (opp.volunteers_registered / opp.volunteers_needed) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {opp.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{opp.description}</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-700">
          <span className="w-4 h-4 mr-2">📅</span>
          <span className="font-medium">Date:</span>
          <span className="ml-2">{opp.date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="w-4 h-4 mr-2">📍</span>
          <span className="font-medium">Location:</span>
          <span className="ml-2">{opp.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="w-4 h-4 mr-2">👥</span>
          <span className="font-medium">Volunteers:</span>
          <span className="ml-2">
            {opp.volunteers_registered} / {opp.volunteers_needed}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{Math.round(volunteersPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              volunteersPercentage >= 100
                ? "bg-green-500"
                : volunteersPercentage >= 75
                ? "bg-blue-500"
                : "bg-blue-400"
            }`}
            style={{ width: `${Math.min(volunteersPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      <button
        onClick={() => onSignUp(opp.id)}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
          volunteersPercentage >= 100
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        disabled={volunteersPercentage >= 100}
      >
        {volunteersPercentage >= 100 ? "Full" : "Sign Up"}
      </button>
    </div>
  );
}
