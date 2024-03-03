import React from "react";

function SchoolCurriculum({ data }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold py-4">CURRICULUM</h1>
      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <h1 className="font-bold text-2xl my-4 ">{item.class}</h1>
            <div className="grid grid-cols-1 gap-2">
              {item.subjects.map((subjectName, subIndex) => (
                <h1
                  key={subIndex}
                  className="bg-gray-200 border border-gray-400 text-lg"
                >
                  {subjectName}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolCurriculum;
