import React from "react";

function Section1() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between text-center  gap-8  items-center my-10 ">
      <div className="flex flex-col items-center md:w-1/3 px-10 gap-3 ">
        <h1 className="font-bold text-yellow text-3xl ">
          Welcome to our Platfrom
        </h1>
        <p className="text-xl">
          School-Hub: Where Parents and Schools Unite, Discover Your Ideal
          Educational Delight. Connect, Explore, and Find the Perfect Fit, A
          Platform Bridging Learning - Ultimate, Complete.
        </p>
      </div>
      <div className="md:w-1/3 relative school-details-card ">
        <div className="rounded-full  bg-yellow  ">
          <p className="absolute hidden lg:block top-[20%] right-[10%] text-white text-5xl font-mono font-bold">
            IMAGINE <br />
            BELIEVE <br />
            ACHIEVE
          </p>
          <img
            className=" px-10 pt-10 h-[20rem]  "
            src="https://images.thrively.com/v7/https://assets.thrively.com/v1/get/_/18bc59c5-60b7-5b20-8b52-ff7d72450000/home-boyimg.png?func=bound&w=700&h=880"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:w-1/3 px-10 gap-3 ">
        <h1 className="font-bold text-yellow text-3xl">Our Mission</h1>
        <p className="text-xl">
          Our mission is to simplify school selection. Through user-friendly
          profiles, AI intelligence, and genuine insights, we pave the way for
          informed decisions, unlocking every child's educational triumph.
        </p>
      </div>
    </div>
  );
}

export default Section1;
