import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";

function SchoolAbout({ schoolID }) {
  console.log("ABout SID: ", schoolID);
  const [schoolAboutData, setSchoolAboutData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-about/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools : ", data);
        setSchoolAboutData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <div className="px-4 py-10  min-h-screen bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 p-10">
        About School
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        {/* First Card */}
        <div className="w-full md:w-3/4 xl:w-2/3 bg-white school-details-card rounded-lg shadow-xl overflow-hidden">
          <div className="bg-yellow p-8">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              About School
            </h2>
          </div>
          <div className="p-10 ">
            <ReactQuill
              value={schoolAboutData.aboutSchoolDescription}
              readOnly={true}
              theme={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolAbout;
