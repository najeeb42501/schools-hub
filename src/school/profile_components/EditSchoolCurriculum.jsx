import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditSchoolCurriculum({ id }) {
  const [courses, setCourses] = useState([
    { id: 1, name: "Sindh Text Board", selected: false },
    { id: 2, name: "Oxford O Level", selected: false },
    { id: 3, name: "Agha Khan Board", selected: false },
    { id: 4, name: "Federal Board", selected: false },
    // Add more courses as needed
  ]);

  const [otherDetails, setOtherDetails] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-curriculum/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Extract course names from the response data
        const selectedCourseNames = data.courses;

        // Update the state to mark selected courses as true
        const updatedCourses = courses.map((course) => ({
          ...course,
          selected: selectedCourseNames.includes(course.name),
        }));

        setCourses(updatedCourses);
        setOtherDetails(data.otherDetails || "");
        setIsDataFetched(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleCheckboxChange = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, selected: !course.selected } : course
    );
    setCourses(updatedCourses);
  };

  const handleSubmit = async () => {
    try {
      const selectedCourses = courses
        .filter((course) => course.selected)
        .map((course) => course.name);

      const formData = {
        courses: selectedCourses,
        otherDetails: otherDetails,
      };

      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/save-school-curriculum-data/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to save data");
      }
      alert("Data Saved Successfully");
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Edit School Curriculum
      </h2>
      {isDataFetched && (
        <>
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
          <div className="mb-4">
            <label
              htmlFor="otherDetails"
              className="block text-lg font-semibold mb-2"
            >
              Other Details:
            </label>

            <ReactQuill
              value={otherDetails}
              onChange={setOtherDetails}
              placeholder="Add other necessary details about the curriculum..."
            />
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default EditSchoolCurriculum;
