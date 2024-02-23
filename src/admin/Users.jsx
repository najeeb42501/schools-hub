// Users.js
import React, { useState } from "react";

function Users() {
  // Sample data for users (replace with actual data)
  const [users, setUsers] = useState([
    { id: 1, email: "user1@example.com", password: "password1" },
    { id: 2, email: "user2@example.com", password: "password2" },
    { id: 3, email: "user3@example.com", password: "password3" },
    // Add more sample data as needed
  ]);

  // Function to handle deletion of a user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
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
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.password}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(user.id)}
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
