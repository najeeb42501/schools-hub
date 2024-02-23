// Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ onMenuItemClick }) {
  // Mock data for the logged-in user
  const user = {
    name: "John Doe",
    // imageUrl: "https://example.com/user.jpg", // Replace with actual user image URL
  };

  // Function to handle menu item clicks
  const handleMenuClick = (menuItem) => {
    onMenuItemClick(menuItem);
  };

  return (
    <aside className="col-span-2 bg-gray-900 text-gray-100 p-4">
      {/* Logged-in user section */}
      <div className="flex items-center mb-8">
        {/* User icon */}
        <div className="rounded-full bg-gray-800 p-2 mr-3">
          <FontAwesomeIcon icon={faUser} className="text-gray-400" />
        </div>
        {/* User name */}
        <span className="text-lg font-semibold">{user.name}</span>
      </div>

      {/* Sidebar menu */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul>
          <li
            className="mb-2 hover:text-blue-400"
            onClick={() => handleMenuClick("Overview")}
          >
            Overview
          </li>
          <li
            className="mb-2 hover:text-blue-400"
            onClick={() => handleMenuClick("Schools")}
          >
            Schools
          </li>
          <li
            className="mb-2 hover:text-blue-400"
            onClick={() => handleMenuClick("Users")}
          >
            Users
          </li>
          <li
            className="mb-2 hover:text-blue-400"
            onClick={() => handleMenuClick("Settings")}
          >
            Settings
          </li>
          <li className="mb-2 hover:text-blue-400">Logout</li>
        </ul>
      </div>

      {/* Attractive and engaging bar */}
      <div className="bg-blue-500 h-1 mt-8"></div>
    </aside>
  );
}

export default Sidebar;
