import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../state/ContextAPI";

function Navbar() {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch an action to reset the user state
    dispatch({
      type: "SET_USER",
      payload: { username: "guest", email: "", password: "", type: "guest" },
    });
    navigate("/");
  };

  return (
    <header className="p-4 z-[50] bg-gray-900 glass text-white w-full border border-black">
      <nav className="flex items-center justify-between md:mx-20 mx-2">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">Schools Hub</h1>
          </Link>
        </div>
        <div className="hidden font-bold md:flex space-x-10">
          <Link to="/" className="hover:text-yellow">
            Home
          </Link>
          <Link to="/schools" className="hover:text-yellow">
            Schools
          </Link>
          <Link to="/blogs" className="hover:text-yellow">
            Blogs
          </Link>
          {state.type === "user" ? (
            <Link to="/aibot" className="hover:text-yellow">
              AI Bot
            </Link>
          ) : null}
          <Link to="/about" className="hover:text-yellow">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {state.type !== "guest" ? (
            <>
              <div className="flex items-center space-x-2">
                <img src="user-icon.png" alt="User Icon" className="h-6 w-6" />
                <span>{state.username}</span>
              </div>
              <button
                className="btn btn-outline text-white hover:bg-yellow"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline text-white hover:bg-yellow"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="btn btn-outline bg-yellow hover:bg-gray-300 hover:text-black"
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
