import React from "react";

function SchoolFacilities({ facilities, activities }) {
  return (
    <div className="">
      <div>
        <h1 className="text-center text-3xl font-bold">FACILITIES</h1>
        {facilities.map((item) => {
          return (
            <div className="w-full   bg-base-100 shadow-xl p-4 my-5">
              <h1 className="card-title">⦿ {item.name}</h1>
              <p>‣ {item.description}</p>
              <p>‣ {item.availability}</p>
            </div>
          );
        })}
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default SchoolFacilities;
