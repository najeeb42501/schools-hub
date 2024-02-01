import React from "react";

function SchoolFaculty({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="w-full sm:h-60 flex flex-col sm:flex-row card card-side bg-base-100 shadow-xl my-5">
            <figure className="sm:w-1/4 ">
              <img className="w-full h-40 sm:h-full" src={item.image} />
            </figure>
            <div className="sm:w-3/4 card-body">
              <h2 className="card-title">{item.name}</h2>
              <h2 className="font-bold  ">{item.position}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SchoolFaculty;
