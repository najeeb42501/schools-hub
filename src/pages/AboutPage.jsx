import React from "react";

function AboutPage() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[10rem] bg-gray-100">
        <h1 className="text-5xl text-center font-bold font-mono pt-10">
          About Us
        </h1>
        <h1 className="text-center text-cariGreen text-3xl">
          Connecting Parents to Educational Possibilities With School-Hub
        </h1>
      </div>
      <div className="w-full h-[30rem] flex flex-col items-center px-10">
        <h1 className="text-5xl font-mono font-bold p-10 ">Our Mission</h1>
        <p className="text-center font-serif">
          The mission at hand is to revolutionize the process of choosing the
          right school by focusing on three pivotal aspects: user-friendly
          profiles, AI intelligence, and authentic insights. It aims to simplify
          the overwhelming task of school selection by providing easily
          accessible, comprehensive profiles of educational institutions. These
          profiles serve as a one-stop resource, offering detailed information
          about facilities, curriculum, faculty, and extracurricular activities,
          presented in an intuitive and easily understandable format. Moreover,
          the integration of Artificial Intelligence augments this process by
          analyzing user preferences and data trends, offering personalized
          recommendations tailored to individual needs and preferences.
          Importantly, the mission emphasizes the delivery of genuine insights
          derived from credible sources, including user reviews, statistical
          data, and expert evaluations. By ensuring transparency and reliability
          in the information provided, the mission strives to empower parents,
          guardians, and students to make well-informed decisions that unlock
          the full potential of each child's educational journey, ultimately
          paving the way for academic success and fulfillment.
        </p>
        <h1 className="text-3xl font-bold p-5 text-yellow">
          Join Us & Help Us
        </h1>
      </div>
    </div>
  );
}

export default AboutPage;
