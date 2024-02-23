// AdminDashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Overview from "./Overview"; // Import the default Overview component
import Users from "./Users"; // Import the Users component
import Schools from "./Schools"; // Import the Schools component
import Settings from "./Settings"; // Import the Settings component

function AdminDashboard() {
  // State to manage the currently selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState("Overview");

  // Function to handle menu item clicks and update the selected menu item
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  // Function to render the component based on the selected menu item
  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "Overview":
        return <Overview />;
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
