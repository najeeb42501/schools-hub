import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="p-4 z-[50]  bg-gray-900 glass text-white w-full border border-black ">
      <nav className="flex items-center justify-between md:mx-20 mx-2  ">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold ">Schools Hub</h1>
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
          <Link to="/about" className="hover:text-yellow">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="btn btn-outline text-white  hover:bg-yellow"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="btn btn-outline bg-yellow  hover:bg-gray-300 hover:text-black"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
