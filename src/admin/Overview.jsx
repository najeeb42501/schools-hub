import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatXAxis = (value) => {
  return months[value - 1]; // Adjust value to index
};

function Overview({ registeredUsers }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/all-users");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const allUsers = await response.json();

      // Initialize counts for users and schools for each month
      const counts = Array.from({ length: 12 }, (_, index) => ({
        month: (index + 1).toString(), // January is 1, December is 12
        users: 0,
        schools: 0,
      }));

      // Loop through each user to count the users and schools for each month
      allUsers.forEach((user) => {
        const createdAt = new Date(user.createdAt);
        const monthIndex = createdAt.getMonth();
        if (user.type === "user") {
          counts[monthIndex].users++;
        } else if (user.type === "school") {
          counts[monthIndex].schools++;
        }
      });

      // Update the state with the counts data
      setData(counts);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Separate data for schools and users
  const schoolsData = data.map(({ month, schools }) => ({ month, schools }));
  const usersData = data.map(({ month, users }) => ({ month, users }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {/* First row with two cards */}
      <div className="card p-10 bg-cariGreen text-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Total Users</h2>
        <hr className="border-1 border-gray-100 w-full rounded-full  my-2" />
        <p className="text-5xl font-bold">{registeredUsers.totalUsers}</p>
      </div>

      <div className="card p-10 bg-cariGreen text-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Total Schools</h2>
        <hr className="border-1 border-gray-100 w-full rounded-full  my-2" />
        <p className="text-5xl font-bold">{registeredUsers.totalSchools}</p>
      </div>

      <div className="card p-4 bg-gray-100 shadow-lg rounded-lg ">
        <h2 className="text-2xl text-center font-semibold mb-2">
          Users Registrations Over Previous Months
        </h2>
        <hr className="border-1 border-gray-500 w-full rounded-full  my-5" />

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={usersData}
            margin={{ top: 5, right: 20, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tickFormatter={formatXAxis} />
            <YAxis domain={[0, "dataMax + 5"]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#10b981" name="Users" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card p-4 bg-gray-100  shadow-lg rounded-lg ">
        <h2 className="text-2xl text-center font-semibold mb-2">
          Schools Registrations Over Previous Months
        </h2>
        <hr className="border-1 border-gray-500 w-full rounded-full  my-5" />

        <ResponsiveContainer width="100%" height={300}>
          {/* Bar chart for schools */}
          <BarChart
            data={schoolsData}
            margin={{ top: 5, right: 20, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tickFormatter={formatXAxis} />
            <YAxis domain={[0, "dataMax + 5"]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="schools" fill="#3b82f6" name="Schools" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Overview;
