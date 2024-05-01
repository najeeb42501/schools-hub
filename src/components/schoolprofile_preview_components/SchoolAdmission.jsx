import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";

function SchoolAdmission({ schoolID }) {
  const [schoolAdmissionData, setSchoolAdmissionData] = useState({});
  console.log("schoolid: ", schoolID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-admission/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolAdmissionData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const openingDate = formatDate(schoolAdmissionData.openingDate);
  const closingDate = formatDate(schoolAdmissionData.closingDate);

  return (
    <div className="py-10 px-4 min-h-screen bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Admission Details
      </h2>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className="bg-nightGreen p-4">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Admission Dates
            </h2>
          </div>
          <div className="flex flex-row p-10 text-lg gap-6 justify-around bg-gray-50">
            <p className="school-detail-title">
              Opening Date :
              <span className=" pl-4 text-xl school-detail-content">
                {openingDate}
              </span>
            </p>
            <p className="school-detail-title">
              Closing Date :
              <span className="pl-4 text-xl school-detail-content">
                {closingDate}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className="bg-nightGreen p-4">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Admission Process
            </h2>
          </div>
          <div className="flex flex-row  p-4 gap-6  bg-gray-50 ">
            <ReactQuill
              value={schoolAdmissionData.process || ""}
              readOnly={true}
              theme={null}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className="bg-nightGreen p-4">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Admission Criteria
            </h2>
          </div>
          <div className="flex flex-row p-4 gap-6 text-lg bg-gray-50">
            <ReactQuill
              value={schoolAdmissionData.criteria || ""}
              readOnly={true}
              theme={null}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className="bg-nightGreen p-4">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Required Documents
            </h2>
          </div>
          <div className="flex flex-row p-4 gap-6 text-lg bg-gray-50">
            <ReactQuill
              value={schoolAdmissionData.requiredDocuments || ""}
              readOnly={true}
              theme={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolAdmission;
