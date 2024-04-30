import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../state/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle Dropdown
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    // Dispatch an action to reset the user state
    dispatch({
      type: "SET_USER",
      payload: { username: "guest", email: "", password: "", type: "guest" },
    });
    navigate("/");
  };

  return (
    <header className="relative p-4 z-[1000] bg-cariGreen glass text-white w-full border border-black">
      <nav className="flex items-center justify-between md:mx-14 mx-6 ">
        <div>
          <Link to="/">
            <h1 className="text-4xl py-2 text-nightGreen font-extrabold text-nightGreen-500 hover:text-nightGreen-400 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              Schools Hub
            </h1>
          </Link>
        </div>
        <div className="hidden text-xl font-bold md:flex space-x-10">
          <Link to="/" className="hover:text-nightGreen">
            Home
          </Link>
          <Link to="/schools" className="hover:text-nightGreen">
            Schools
          </Link>
          <Link to="/blogs" className="hover:text-nightGreen">
            Blogs
          </Link>
          {state.type === "user" ? (
            <Link to="/aibot" className="hover:text-nightGreen">
              AI Bot
            </Link>
          ) : null}
          <Link to="/about" className="hover:text-nightGreen">
            About
          </Link>
        </div>
        <div className="relative flex items-center space-x-4">
          {state.type !== "guest" ? (
            <>
              <div className="flex items-center space-x-2">
                {/* Using a generic person icon for user representation */}
                <div className="cursor-pointer" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                  {/* Placeholder for a default user icon */}
                  <span className="ml-2">&#9660;</span> {/* Dropdown arrow */}
                </div>
                {/* Dropdown Menu */}
                {showDropdown && (
                  <div
                    className="absolute mt-2 p-4  right-0 bg-gray-700  rounded shadow-lg z-2000"
                    style={{ top: "100%", right: 0 }}
                  >
                    <div className="block hover:text-nightGreen p-2">
                      {state.username}
                    </div>
                    <Link
                      to="/editschoolprofile"
                      className="block hover:text-nightGreen p-2"
                    >
                      Edit Profile
                    </Link>
                    <Link
                      to={`/schoolprofile/${state._id}`}
                      className="block hover:text-nightGreen p-2"
                    >
                      View Profile
                    </Link>
                    <button
                      className="text-left w-full hover:text-nightGreen p-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline text-white hover:bg-nightGreen"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="btn btn-outline text-white bg-nightGreen hover:bg-gray-300 hover:text-black"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
