import React, { useState } from "react";

function EditSchoolCurriculum() {
  const [courses, setCourses] = useState([
    { id: 1, name: "Sindh Text Board", selected: false },
    { id: 2, name: "Oxford O Level", selected: false },
    { id: 3, name: "Agha Khan", selected: false },
    { id: 4, name: "Federal Board", selected: false },
    // Add more courses as needed
  ]);

  const handleCheckboxChange = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, selected: !course.selected } : course
    );
    setCourses(updatedCourses);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log(
      "Saving selected courses:",
      courses.filter((course) => course.selected)
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Edit School Curriculum
      </h2>
      <div>
        {courses.map((course) => (
          <div key={course.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              id={`course-${course.id}`}
              checked={course.selected}
              onChange={() => handleCheckboxChange(course.id)}
              className="mr-2"
            />
            <label htmlFor={`course-${course.id}`} className="text-lg">
              {course.name}
            </label>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditSchoolCurriculum;
