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
      <h1 className="text-5xl font-bold  font-sans bg-nightGreen  "> </h1>
      <h1 className="text-5xl text-center py-20 text-cariGreen bg-nightGreen font-extrabold text-nightGreen-500 hover:text-nightGreen-400 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        Choose Ideal Schools For Your Child
      </h1>

      <div className="flex flex-col md:flex-row w-full px-20 justify-between text-center  gap-8 items-center my-20  ">
        <div className="flex flex-col gap-3  shadow-inner bg-gray-200 p-8 ">
          <FontAwesomeIcon
            icon={faChalkboard}
            className=" sm:text-8xl text-5xl "
          />
          <h1 className="text-xl font-bold text-nightGreen ">
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
          <h1 className="text-xl font-bold  text-nightGreen ">
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
          <h1 className="text-xl font-bold text-nightGreen ">
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
          <h1 className="text-xl font-bold text-nightGreen  ">
            Read Blogs <br /> Engage With Others
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
