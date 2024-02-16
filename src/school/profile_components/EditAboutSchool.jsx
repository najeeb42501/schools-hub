import React, { useState } from "react";

function EditAboutSchool() {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the description to the server
    console.log("Description:", description);
    alert("Description saved! (simulated)");
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        Edit About School Details
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Write brief description about your school goals and objectives:
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="block w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring"
          rows="5"
          placeholder="Enter description..."
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Save Description
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAboutSchool;
