// AdminDashboard.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Overview from "./Overview"; // Import the default Overview component
import Users from "./Users"; // Import the Users component
import Schools from "./Schools"; // Import the Schools component
import Settings from "./Settings"; // Import the Settings component

function AdminDashboard() {
  // State to manage the currently selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState("Overview");
  const [users, setUsers] = useState({});

  const fetchCounts = async () => {
    try {
      const response = await fetch("http://localhost:5000/users"); // Assuming your server is running on localhost:5000

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("DATA:", data);

      setUsers(data);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
    // console.log("Count : " + counts);
  }, []);

  // Function to handle menu item clicks and update the selected menu item
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  // Function to render the component based on the selected menu item
  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "Overview":
        return <Overview registeredUsers={users} />;
      case "Users":
        return <Users />;
      case "Schools":
        return <Schools />;
      case "Settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 h-screen">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <div className="col-span-9 bg-white p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
