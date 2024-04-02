import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboard,
  faRobot,
  faShieldHalved,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="w-full ">
      <h1 className="text-5xl font-bold text-center font-sans ">
        Choose Ideal Schools For Your Child{" "}
      </h1>

      <div className="flex flex-col md:flex-row w-full px-20 justify-between text-center  gap-8 items-center my-20  ">
        <div className="flex flex-col gap-3  shadow-inner bg-gray-200 p-8 ">
          <FontAwesomeIcon
            icon={faChalkboard}
            className=" sm:text-8xl text-5xl "
          />
          <h1 className="text-xl font-bold ">
            Comprehensive <br />
            Schools Profile
          </h1>
          <p>
            Detailed information about schools, including facilities,
            curriculum, fee structure, and extracurricular activities
          </p>
        </div>
        <div className="flex flex-col gap-3  shadow-inner bg-gray-200 p-8  ">
          <FontAwesomeIcon icon={faRobot} className=" sm:text-8xl text-5xl " />
          <h1 className="text-xl font-bold ">
            Ask-AI
            <br />
            Child Guidance
          </h1>
          <p>
            Engage with our AI for personalized child guidance and schooling
            queries.
          </p>
        </div>
        <div className="flex flex-col gap-3  shadow-inner bg-gray-200 p-8 ">
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className=" sm:text-8xl text-5xl "
          />
          <h1 className="text-xl font-bold ">
            Public Feedback <br /> & Reviews
          </h1>
          <p>
            Evaluate schools with ratings, and feedback from parents and
            students. Also, share yours.
          </p>
        </div>
        <div className="flex flex-col gap-3  shadow-inner bg-gray-200 p-8 ">
          <FontAwesomeIcon
            icon={faShieldHalved}
            className=" sm:text-8xl text-5xl "
          />
          <h1 className="text-xl font-bold ">
            Safe and Secure <br /> Environment
          </h1>
          <p>
            Stay informed with educational blogs covering trends, tips, and
            insights for a holistic schooling experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
