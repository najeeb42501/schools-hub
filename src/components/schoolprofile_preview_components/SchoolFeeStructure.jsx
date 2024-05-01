import React, { useState, useEffect } from "react";

function SchoolFeeStructure({ data, schoolID }) {
  const [schoolFeeData, setSchoolFeeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-fee-structure/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolFeeData(data.feeList); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);
  return (
    <div className="overflow-x-auto min-h-screen bg-gray-100 text-center ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 p-10">
        School Fee Details
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        {/* Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Fee Structure
            </h2>
          </div>
          <div className="p-10">
            <table className="table table-zebra ">
              <thead>
                <tr className="font-bold text-lg">
                  <th>Class</th>
                  <th>Deposit Fee</th>
                  <th>Admission Fee</th>
                  <th>Tuition Fee</th>
                  <th>Exam Fee</th>
                </tr>
              </thead>
              <tbody>
                {schoolFeeData.map((item) => {
                  return (
                    <tr>
                      <td>{item.className}</td>
                      <td>{item.depositFee}</td>
                      <td>{item.admissionFee}</td>
                      <td>{item.tuitionFee}</td>
                      <td>{item.examFee}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolFeeStructure;
