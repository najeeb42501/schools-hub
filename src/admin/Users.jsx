import React, { useState, useEffect } from "react";

function Users() {
  // Sample data for users (replace with actual data)
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Users : " + data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
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
      alert("User deleted successfully");
      const updatedUsers = users.filter((user) => user._id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to handle search
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10">
      {/* Search input */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search users by email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border w-1/2 border-gray-300 p-2 rounded mb-4 "
        />
      </div>

      <hr className="my-10 border-2 border-gray-300" />

      {/* Table of users */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">
                Email
              </th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">
                Password
              </th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-2 border border-gray-300">
                  {user.email}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {user.password}
                </td>
                <td className="px-4 py-2 border text-center border-gray-300">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-cariGreen hover:bg-nightGreen  text-white w-1/2 "
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
