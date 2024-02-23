// Overview.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Overview() {
  // Sample data for the chart (replace with actual data)
  const data = [
    { month: "Jan", users: 400, schools: 240 },
    { month: "Feb", users: 300, schools: 139 },
    { month: "Mar", users: 200, schools: 980 },
    { month: "Apr", users: 278, schools: 390 },
    { month: "May", users: 189, schools: 480 },
    { month: "Jun", users: 239, schools: 380 },
    { month: "Jul", users: 349, schools: 430 },
    { month: "Aug", users: 200, schools: 490 },
    { month: "Sep", users: 278, schools: 390 },
    { month: "Oct", users: 189, schools: 480 },
    { month: "Nov", users: 239, schools: 380 },
    { month: "Dec", users: 349, schools: 430 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {/* First row with two cards */}
      <div className="card p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Total Users</h2>
        <p className="text-3xl font-bold">5000</p>
      </div>

      <div className="card p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Total Schools</h2>
        <p className="text-3xl font-bold">100</p>
      </div>

      {/* Second row with the chart */}
      <div className="card p-4 bg-white shadow-lg rounded-lg col-span-2 sm:col-span-1">
        <h2 className="text-xl font-semibold mb-2">
          Registrations Over Previous Months
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#10b981"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="schools"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Overview;
