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
    <div className="w-full">
      <h1 className="text-5xl font-bold font-sans bg-nightGreen"> </h1>
      <h1 className="text-5xl text-center py-20 text-white bg-nightGreen font-extrabold text-nightGreen-500 hover:text-nightGreen-400 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        Choose Ideal Schools For Your Child
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-20 my-20">
        <div className="flex flex-col items-center gap-2 school-details-card justify-center shadow-inner bg-cariGreen p-8">
          <FontAwesomeIcon
            icon={faChalkboard}
            className="sm:text-8xl text-nightGreen text-5xl"
          />
          <h1 className="text-xl font-bold text-white text-center">
            Comprehensive Schools Profile
          </h1>
          <p className="text-center font-semibold">
            Detailed information about schools, including facilities,
            curriculum, fee structure, and extracurricular activities
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 school-details-card justify-center shadow-inner bg-cariGreen p-8">
          <FontAwesomeIcon
            icon={faRobot}
            className="text-nightGreen sm:text-8xl text-5xl"
          />
          <h1 className="text-xl font-bold text-white text-center">
            Ask-AI
            <br />
            Child Guidance
          </h1>
          <p className="text-center font-semibold">
            Engage with our AI for personalized child guidance and schooling
            queries.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 school-details-card justify-center shadow-inner bg-cariGreen p-8">
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className="sm:text-8xl text-nightGreen text-5xl"
          />
          <h1 className="text-xl font-bold text-white text-center">
            Public Feedback
            <br />& Reviews
          </h1>
          <p className="text-center font-semibold">
            Evaluate schools with ratings, and feedback from parents and
            students. Also, share yours.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 school-details-card justify-center shadow-inner bg-cariGreen p-8">
          <FontAwesomeIcon
            icon={faShieldHalved}
            className="sm:text-8xl text-nightGreen text-5xl"
          />
          <h1 className="text-xl font-bold text-white text-center">
            Read Blogs Engage With Others
          </h1>
          <p className="text-center font-semibold">
            Stay informed with educational blogs covering trends, tips, and
            insights for a holistic schooling experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
