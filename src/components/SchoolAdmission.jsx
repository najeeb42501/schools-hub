import React from "react";

function SchoolAdmission() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Admission Details
      </h2>
      <div className="space-y-4">
        <p className="text-lg mb-2">
          <span className="font-semibold">Admission Opening Dates:</span>{" "}
          <br className="sm:hidden" /> September 1st, 2023 - September 30th,
          2023
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Admission Criteria:</span>{" "}
          <br className="sm:hidden" />
          Criteria details here...
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Admission Process:</span>{" "}
          <br className="sm:hidden" />
          Process details here...
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Documents Required:</span>{" "}
          <br className="sm:hidden" />
          List of required documents...
        </p>
      </div>
    </div>
  );
}

export default SchoolAdmission;
