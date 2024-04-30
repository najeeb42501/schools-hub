import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <section id="hero" className="relative w-full h-[45rem] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black"></div>
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16 text-white">
        <h1 className="font-bold md:text-6xl text-white text-4xl leading-tight">
          Connecting Parents to Educational <br />
          Possibilities With School-Hub
        </h1>
        <p className="text-gray-400 font-l">Learn the Future</p>
        <p className=" text-white max-w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[32%] mt-4">
          School-Hub revolutionizes the school selection journey, offering
          parents a seamless platform to explore and compare educational
          institutions. With detailed profiles, AI-driven recommendations, and
          insightful reviews, School-Hub empowers parents to make well-informed
          decisions, ensuring a brighter future for their children.
        </p>
        <Link
          to="/schools"
          className="btn bg-cariGreen text-white hover:bg-nightGreen px-6 md:px-8 py-2 mt-4"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}

export default Main;
