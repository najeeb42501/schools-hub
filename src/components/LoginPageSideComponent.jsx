import React from "react";

function LoginPageSideComponent() {
  return (
    <>
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
    </>
  );
}

export default LoginPageSideComponent;
