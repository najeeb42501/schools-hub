import React from "react";

function SearchComponent() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        className="w-full h-[20rem] object-cover"
        src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="join absolute text-center">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>City</option>
          <option>Town</option>
          <option>Type</option>
        </select>
        <div className="indicator">
          <button className="btn join-item hover:bg-yellow">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
