// Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ onMenuItemClick }) {
  // Mock data for the logged-in user
  const user = {
    name: "Admin",
    // imageUrl: "https://example.com/user.jpg", // Replace with actual user image URL
  };

  // Function to handle menu item clicks
  const handleMenuClick = (menuItem) => {
    onMenuItemClick(menuItem);
  };

  return (
    <aside className="col-span-2 bg-nightGreen text-gray-100 ">
      {/* Logged-in user section */}
      <div className="flex items-center mb-4 p-4">
        {/* User icon */}
        <div className="rounded-full bg-gray-800 p-2 mr-3">
          <FontAwesomeIcon icon={faUser} className="text-gray-400" />
        </div>
        {/* User name */}
        <span className="text-2xl font-semibold">{user.name}</span>
      </div>

      <hr className="border-gray-100 border-2 w-full my-4" />

      {/* Sidebar menu */}
      <div className="text-md text-left ">
        <h2 className="text-lg text-center font-semibold mb-4">MENU</h2>

        <ul className="ml-4">
          <li
            className="mb-5 hover:text-cariGreen cursor-pointer "
            onClick={() => handleMenuClick("Overview")}
          >
            OVERVIEW
          </li>

          <li
            className="mb-5 hover:text-cariGreen cursor-pointer"
            onClick={() => handleMenuClick("Schools")}
          >
            SCHOOLS PANEL
          </li>
          <li
            className="mb-5 hover:text-cariGreen cursor-pointer"
            onClick={() => handleMenuClick("Users")}
          >
            USERS PANEL
          </li>
          <li
            className="mb-5 hover:text-cariGreen cursor-pointer"
            onClick={() => handleMenuClick("Add Blogs")}
          >
            MANAGE BLOGS
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
