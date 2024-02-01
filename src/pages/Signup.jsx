import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="h-full w-full border-black border">
      <div className=" flex   h-[660px]">
        <div className=" justify-center items-center hidden md:flex flex-col w-full md:w-2/5 bg-orange-200">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1567168539593-59673ababaae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="absolute">
            <h1 className="text-3xl font-bold ">Schools Hub</h1>
            <p>Hello, welcome to our platfrom!</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border w-full md:w-3/5 pt-10 grow">
          <h1 className="text-2xl text-center md:text-3xl font-bold ">
            Rigister Yourself On Our Platform!
          </h1>

          <form
            onSubmit=""
            className="w-[300px] flex flex-col justify-center py-10"
          >
            <input
              className=" p-3 my-2 bg-gray-100 rounded "
              type="text"
              placeholder="Full Name"
            />
            <input
              className=" p-3 my-2 bg-gray-100 rounded "
              type="email"
              placeholder="Email"
            />
            <input
              className=" p-3 my-2 bg-gray-100 rounded "
              type="password"
              placeholder="New Password"
            />
            <input
              className=" p-3 my-2 bg-gray-100 rounded "
              type="password"
              placeholder="Confirm Password"
            />
            <button className="bg-yellow hover:bg-black hover:text-yellow py-3 my-6 rounded font-bold">
              Sign Up
            </button>
            <div className="flex justify-between text-small text-gray-500">
              <p>
                <input className="mr-2" type="checkbox" /> Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8 ">
              <span className="text-gray-500">Already have an account?</span>
              <Link to="/login" className="text-yellow">
                {" "}
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
