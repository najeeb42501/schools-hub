import React from "react";
import { Link } from "react-router-dom";
const base_url = "http://localhost:5000/images/";
function SchoolsList({ schools = [] }) {
  if (!Array.isArray(schools) || schools.length === 0) {
    return <div>No schools available</div>;
  }
  console.log("Schools List :", schools);
  return (
    <div>
      <div className="grid grid-cols-4 items-center gap-6 sm:flex-row flex-wrap m-10">
        {schools.map((school) => (
          <div key={school._id} className="card h-96 bg-base-200 shadow-xl">
            <figure>
              <img
                src={
                  school.schoolProfilePhoto
                    ? `${base_url}${school.schoolProfilePhoto}`
                    : ""
                }
                alt="School Logo"
                className="w-full h-full"
              />
            </figure>
            <div className="card-body py-2">
              <h2 className="card-title">
                {school.school_name}
                <div className="badge badge-error">Admission Open!</div>
              </h2>
              <p>{school.schoolLevel || "Secondary School"}</p>
              <p>Address: {school.city}</p>
              <div className="card-actions justify-center">
                <Link
                  to={`/schoolprofile/${school._id}`}
                  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                    See Profile
                  </span>
                  <span className="relative invisible">See Profile</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="join flex justify-center m-10">
        <button className="join-item btn hover:bg-yellow">«</button>
        <button className="join-item btn bg-yellow">Page 1</button>
        <button className="join-item btn hover:bg-yellow">»</button>
      </div>
    </div>
  );
}

export default SchoolsList;
