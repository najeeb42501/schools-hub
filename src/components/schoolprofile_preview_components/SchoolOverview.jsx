import React from "react";

function SchoolOverview({ data }) {
  return (
    <div className="px-4 py-10  min-h-screen bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Overview
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        {/* First Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              School Details
            </h2>
          </div>
          <ul className="p-8 space-y-4 bg-gray-50">
            {/* Increased spacing and added a subtle background for the content area */}
            <li className="text-xl">
              <span className="font-semibold">School Level:</span>{" "}
              {data.schoolLevel}
            </li>
            <li className="text-xl">
              <span className="font-semibold">School System:</span>{" "}
              {data.schoolSystem}
            </li>
            <li className="text-xl">
              <span className="font-semibold">School Medium:</span>{" "}
              {data.schoolMedium}
            </li>
            <li className="text-xl">
              <span className="font-semibold">Schooling Type:</span>{" "}
              {data.schoolingType}
            </li>
            <li className="text-xl">
              <span className="font-semibold">Accreditations:</span>{" "}
              {data.accreditations}
            </li>
          </ul>
        </div>

        {/* Second Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-yellow rounded-lg shadow-xl overflow-hidden">
          <div className="bg-red-600 p-8">
            {" "}
            {/* Similar adjustments as the first card for consistency */}
            <h2 className="text-3xl font-bold text-white mb-4">
              Student Teacher Details
            </h2>
          </div>
          <ul className="p-8 space-y-4 bg-gray-50">
            <li className="text-xl">
              <span className="font-semibold">Enrolled Students:</span>{" "}
              {data.enrolledStudents}
            </li>
            <li className="text-xl">
              <span className="font-semibold">Number of Teachers:</span>{" "}
              {data.numberOfTeachers}
            </li>
            <li className="text-xl">
              <span className="font-semibold">Average Class Size:</span>{" "}
              {data.averageClassSize}
            </li>
            <li className="text-xl">
              <span className="font-semibold">Student Teacher Ratio:</span>{" "}
              {data.studentTeacherRatio}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolOverview;
