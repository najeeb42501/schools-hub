import React from "react";
import { Link } from "react-router-dom";

const base_url = "http://localhost:5000/images/";

function SchoolsList({ schools = [] }) {
  if (!Array.isArray(schools) || schools.length === 0) {
    return (
      <div className="text-center font-bold text-xl m-10">
        No schools available for this filter, please reset filters and apply
        others
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {schools.map((school) => (
          <div
            key={school._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden school-details-card cursor-pointer"
          >
            <img
              src={
                school.schoolProfilePhoto
                  ? `${base_url}${school.schoolProfilePhoto}`
                  : "https://via.placeholder.com/400x200"
              }
              alt="School Logo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {school.schoolName}
              </h2>
              <p className="text-gray-600">
                {school.schoolLevel || "Secondary School"}
              </p>
              <p className="text-gray-800 ">
                City: <span> {school.schoolCity}</span>
              </p>
              <div className="mt-4 text-center">
                <Link
                  to={`/schoolprofile/${school._id}`}
                  className="inline-block px-6 py-2 border-2 border-nightGreen text-nightGreen font-medium rounded-full hover:text-white hover:bg-nightGreen transition-colors duration-300"
                >
                  See Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition-colors">
          «
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-600 text-white">
          Page 1
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition-colors">
          »
        </button>
      </div>
    </div>
  );
}

export default SchoolsList;
