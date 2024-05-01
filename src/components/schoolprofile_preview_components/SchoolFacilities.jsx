import React, { useState, useEffect } from "react";

function SchoolFacilities({ facilities, activities, schoolID }) {
  const [schoolFacilitiesData, setSchoolFacilitiesData] = useState({});
  console.log("schoolid: ", schoolID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-activities/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolFacilitiesData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <div className="">
      <div className=" px-8 md:px-20 pt-10  min-h-screen bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
          Facilities
        </h1>
        {schoolFacilitiesData.activities &&
          schoolFacilitiesData.activities.map((item) => {
            return (
              <div className="w-full   bg-base-100 school-details-card shadow-xl p-4 my-5">
                <h1 className="card-title text-xl font-bold pb-4">
                  ⦿ {item.name}
                </h1>
                <p className="text-sm">‣ {item.description}</p>
              </div>
            );
          })}
      </div>
      {/* <div>
        <h1 className="text-center text-3xl font-bold">ACTIVITIES</h1>
        {activities.map((item) => {
          return (
            <div className="w-full   bg-base-100 shadow-xl p-4 my-5">
              <h1 className="card-title">⦿ {item.name}</h1>
              <p>‣ {item.description}</p>
              <p>‣ {item.schedule}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default SchoolFacilities;
