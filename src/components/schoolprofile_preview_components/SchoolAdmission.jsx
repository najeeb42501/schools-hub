import React, { useState, useEffect } from "react";

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

  return (
    <div className=" py-10 px-4 min-h-screen bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Admission Details
      </h2>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        <div className="w-full md:w-3/4 xl:w-2/3  bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Admission Dates
            </h2>
          </div>
          <div className="flex flex-row p-8 gap-6 justify-around bg-gray-50">
            <p>
              Opening Date :
              <span className="text-xl ">
                {schoolAdmissionData.openingDate}
              </span>
            </p>
            <p>
              Closing Date :
              <span className="text-xl ">
                {schoolAdmissionData.openingDate}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/4 xl:w-2/3  bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Admission Process
            </h2>
          </div>
          <div className="flex flex-row p-8 gap-6  bg-gray-50">
            <p>{schoolAdmissionData.process}</p>
          </div>
        </div>

        <div className="w-full md:w-3/4 xl:w-2/3  bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Admission Criteria
            </h2>
          </div>
          <div className="flex flex-row p-8 gap-6 bg-gray-50">
            <p>{schoolAdmissionData.criteria}</p>
          </div>
        </div>

        <div className="w-full md:w-3/4 xl:w-2/3  bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4">
              Required Documents
            </h2>
          </div>
          <div className="flex flex-row p-8 gap-6  bg-gray-50">
            <p>{schoolAdmissionData.requiredDocuments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolAdmission;
