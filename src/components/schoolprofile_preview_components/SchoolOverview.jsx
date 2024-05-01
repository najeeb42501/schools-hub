import React from "react";
import "../../App.css";

function SchoolOverview({ data }) {
  return (
    <div className="px-4 py-10 ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Overview
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        {/* First Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden school-details-card">
          <div className="bg-nightGreen p-4">
            <h2 className="text-3xl text-center font-extrabold text-white mb-4">
              School Details
            </h2>
          </div>
          <ul className="p-10 space-y-4 bg-gray-50">
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                School Level:
              </span>
              <span className="school-detail-content">{data.schoolLevel}</span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                School System:
              </span>
              <span className="school-detail-content">{data.schoolSystem}</span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                School Medium:
              </span>
              <span className="school-detail-content">{data.schoolMedium}</span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                Schooling Type:
              </span>
              <span className="school-detail-content">
                {data.schoolingType}
              </span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                Accreditations:
              </span>
              <span className="school-detail-content">
                {data.accreditations}
              </span>
            </li>
          </ul>
        </div>

        {/* Second Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden school-details-card">
          <div className="bg-nightGreen p-4">
            <h2 className="text-3xl text-center font-bold text-white mb-4">
              Student Teacher Details
            </h2>
          </div>
          <ul className="p-10 space-y-4 bg-gray-50">
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4 ">
                Enrolled Students:
              </span>
              <span className="school-detail-content">
                {data.enrolledStudents}
              </span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                Number of Teachers:
              </span>
              <span className="school-detail-content">
                {data.numberOfTeachers}
              </span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                Average Class Size:
              </span>
              <span className="school-detail-content">
                {data.averageClassSize}
              </span>
            </li>
            <li className="school-detail-item">
              <span className="font-semibold school-detail-title pr-4">
                Student Teacher Ratio:
              </span>
              <span className="school-detail-content">
                {data.studentTeacherRatio}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolOverview;
