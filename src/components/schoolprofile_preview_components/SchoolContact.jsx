import React, { useState, useEffect } from "react";

function SchoolContact({ schoolID }) {
  const [schoolContactData, setSchoolContactData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-contact/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolContactData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 rounded-md shadow-md">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 p-10">
        School Contact Details:
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        {/* First Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Contact Details
            </h2>
          </div>
          <div className="flex flex-col space-y-4 p-10">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>
                Phone Number:{" "}
                <span className="font-semibold">
                  {schoolContactData.schoolMobileNo}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white mr-2">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>
                Email:{" "}
                <span className="font-semibold">
                  {schoolContactData.schoolEmail}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white mr-2">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>
                Website:{" "}
                <span className="font-semibold">
                  {schoolContactData.schoolWebsite}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p>
                Address:{" "}
                <span className="font-semibold">
                  {schoolContactData.schoolAddress}y
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolContact;
