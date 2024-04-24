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
          <h1 className="text-8xl py-2 text-white font-extrabold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none shadow-outline">
            Learn
            <br /> Grow <br />
            Conquer
          </h1>

          <p></p>
        </div>
      </div>
    </>
  );
}

export default LoginPageSideComponent;
