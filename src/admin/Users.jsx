// Users.js
import React, { useState, useEffect } from "react";

function Users() {
  // Sample data for users (replace with actual data)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("School : " + data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    fetchSchools();
  }, []);

  // Function to handle deletion of a user
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/deleteUser/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert("School deleted successfully");
      const updatedSchools = users.filter((school) => school._id !== id);
      setUsers(updatedSchools);
    } catch (error) {
      console.error("Error deleting school:", error);
    }
  };

  return (
    <div className="p-4">
      {/* Table of users */}
      <div className="overflow-y-auto max-h-96">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.password}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default Users;
