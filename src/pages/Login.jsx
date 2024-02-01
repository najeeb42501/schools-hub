import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-full w-full border-black border">
      <div className=" flex  h-[660px] ">
        <div className=" justify-center items-center hidden md:flex flex-col w-full md:w-2/5 bg-orange-200">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMGxvZ2lufGVufDB8fDB8fHww"
            alt=""
          />
          <div className="absolute">
            <h1 className="text-3xl font-bold ">Schools Hub</h1>
            <p>Hello, welcome to our platfrom!</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border w-full md:w-3/5  pt-10">
          <h1 className="text-3xl font-bold ">Sign In</h1>

          <form
            onSubmit=""
            className="w-[300px] flex flex-col justify-center py-10"
          >
            <input
              className=" p-3 my-2 bg-gray-100 rounded "
              type="email"
              placeholder="Email"
            />
            <input
              className=" p-3 my-2 bg-gray-100 rounded "
              type="password"
              placeholder="Password"
            />
            <button className="btn glass bg-yellow">Sign In</button>
            <div className="flex justify-between text-small text-gray-500">
              <p>
                <input className="mr-2" type="checkbox" /> Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8 ">
              <span className="text-gray-500">New to platform?</span>
              <Link to="/signup"> Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
