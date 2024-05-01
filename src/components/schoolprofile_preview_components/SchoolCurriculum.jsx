import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";

function SchoolCurriculum({ data, schoolID }) {
  const [schoolCourseData, setSchoolCourseData] = useState({});
  console.log("schoolid: ", schoolID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-curriculum/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolCourseData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <div className="text-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 p-10">
        School Currilum Details
      </h1>
      <div className="flex flex-col gap-10 justify-center  items-center mx-auto">
        {/* First Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white rounded-lg school-details-card shadow-xl overflow-hidden">
          <div className="bg-nightGreen  p-4">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Curriculum Followed:
            </h2>
          </div>
          <ul className=" p-10 space-y-4 text-left bg-gray-50">
            {schoolCourseData.courses &&
              schoolCourseData.courses.map((course) => {
                return <li className="text-xl"> ⦿ {course}</li>;
              })}
          </ul>
        </div>

        {/* Second Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-nightGreen rounded-lg school-details-card shadow-xl overflow-hidden">
          <div className="bg-nightGreen  p-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Other Details:
            </h2>
          </div>
          <div className=" p-4 space-y-4 text-left bg-gray-50">
            <ReactQuill
              value={schoolCourseData.otherDetails}
              readOnly={true}
              theme={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolCurriculum;
