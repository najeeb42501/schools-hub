// Schools.js
import React, { useState } from "react";

function Schools() {
  // Sample data for schools (replace with actual data)
  const [schools, setSchools] = useState([
    {
      id: 1,
      schoolName: "School A",
      username: "userA",
      password: "passA",
      city: "City A",
    },
    {
      id: 2,
      schoolName: "School B",
      username: "userB",
      password: "passB",
      city: "City B",
    },
    {
      id: 3,
      schoolName: "School C",
      username: "userC",
      password: "passC",
      city: "City C",
    },
    // Add more sample data as needed
  ]);

  // State for form inputs
  const [schoolName, setSchoolName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new school to the schools array
    const newSchool = {
      id: Date.now(), // Generate unique ID (replace with actual method)
      schoolName: schoolName,
      username: username,
      password: password,
      city: city,
    };
    setSchools([...schools, newSchool]);
    // Clear form inputs
    setSchoolName("");
    setUsername("");
    setPassword("");
    setCity("");
  };

  // Function to handle deletion of a school
  const handleDelete = (id) => {
    const updatedSchools = schools.filter((school) => school.id !== id);
    setSchools(updatedSchools);
  };

  return (
    <div className="p-4">
      {/* Form for creating a school profile */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="schoolName" className="block font-medium">
              School Name:
            </label>
            <input
              type="text"
              id="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="form-input mt-1 rounded-md w-full"
              placeholder="Enter school name"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input mt-1 rounded-md w-full"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input mt-1 rounded-md w-full"
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block font-medium">
              City:
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input mt-1 rounded-md w-full"
              placeholder="Enter city"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Create School Profile
        </button>
      </form>

      {/* Table of schools */}
      <div className="overflow-y-auto max-h-96">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">School Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id}>
                <td className="border px-4 py-2">{school.schoolName}</td>
                <td className="border px-4 py-2">{school.username}</td>
                <td className="border px-4 py-2">{school.password}</td>
                <td className="border px-4 py-2">{school.city}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(school.id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schools;
