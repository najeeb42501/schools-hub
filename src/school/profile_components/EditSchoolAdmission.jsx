import React, { useState } from "react";

function EditSchoolAdmission() {
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [criteria, setCriteria] = useState("");
  const [process, setProcess] = useState("");
  const [requiredDocuments, setRequiredDocuments] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Admission Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="openingDates" className="font-semibold block mb-1">
            Admission Opening Dates:
          </label>
          <input
            type="date"
            id="openingDates"
            value={openingDate}
            onChange={(e) => setOpeningDate(e.target.value)}
            className="text-lg p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="openingDates" className="font-semibold block mb-1">
            Admission Closing Dates:
          </label>
          <input
            type="date"
            id="openingDates"
            value={closingDate}
            onChange={(e) => setClosingDate(e.target.value)}
            className="text-lg p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="criteria" className="font-semibold block mb-1">
            Admission Criteria:
          </label>
          <textarea
            id="criteria"
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            className="text-lg p-2 border border-gray-300 rounded-md w-full h-32"
          />
        </div>
        <div>
          <label htmlFor="process" className="font-semibold block mb-1">
            Admission Process:
          </label>
          <textarea
            id="process"
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            className="text-lg p-2 border border-gray-300 rounded-md w-full h-32"
          />
        </div>
        <div>
          <label
            htmlFor="requiredDocuments"
            className="font-semibold block mb-1"
          >
            Documents Required:
          </label>
          <textarea
            id="requiredDocuments"
            value={requiredDocuments}
            onChange={(e) => setRequiredDocuments(e.target.value)}
            className="text-lg p-2 border border-gray-300 rounded-md w-full h-32"
          />
        </div>
      </div>
    </div>
  );
}

export default EditSchoolAdmission;
