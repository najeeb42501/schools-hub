import React, { useState, useEffect } from "react";

function EditSchoolFacilities({ id }) {
  const [activity, setActivity] = useState({ name: "", description: "" });
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-activities/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        const data = await response.json();
        console.log("Res DAT Acts : ", data);
        setActivitiesList(data.activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    fetchActivities();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleAddActivity = () => {
    if (!activity.name.trim()) {
      alert("Please enter activity name.");
      return;
    }
    setActivitiesList([...activitiesList, activity]);
    setActivity({ name: "", description: "" });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/saveActivities/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ activities: activitiesList }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save activities");
      }

      alert("Activities saved successfully!");
      //setActivitiesList([]);
    } catch (error) {
      console.error("Error saving activities:", error);
      alert("Failed to save activities. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Add Activities Your School Has
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="activityName" className="block text-gray-700">
            Activity Name:
          </label>
          <input
            type="text"
            id="activityName"
            name="name"
            value={activity.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter activity name"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={activity.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            rows="3"
            placeholder="Enter description"
          ></textarea>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleAddActivity}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          Add Activity
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Activities:</h3>
        <ul className="list-disc pl-5">
          {activitiesList.map((activity, index) => (
            <li key={index}>
              <strong>{activity.name}:</strong> {activity.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          Save Activities
        </button>
      </div>
    </div>
  );
}

export default EditSchoolFacilities;
