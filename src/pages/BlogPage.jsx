import React from "react";
import Blog from "../components/Blog";

function BlogPage() {
  // Adding Dummy Data to pass as props
  const postData = [
    {
      department: "Content",
      title: "Top 7 Hobbies for students",
      author: "Amit Singh",
      designation: "TCE",
      info: `This post tells you about best approaches  
                   to write single line codes in JavaScript.  
                   Use this post as a quick guide to  
                     short but important JS codes`,
    },
    {
      department: "Content",
      title: "What to teach 4 years old child?",
      author: "Jatin Sharma",
      designation: "TCE",
      info: `No need to worry about technical round interviews  
                   as this post will guide you step by step to  
                   prepare for DSA round`,
    },
    {
      department: "Cotent",
      title: "Best skills to teach child?",
      author: "Shobhit Sharma",
      designation: "TCE",
      info: `Worried about your PC safety? No Problem,  
                   this post tells you about the best antiviruses  
                   to choose in 2023`,
    },
    {
      department: "Cotent",
      title: "Best skills to teach child?",
      author: "Shobhit Sharma",
      designation: "TCE",
      info: `Worried about your PC safety? No Problem,  
                   this post tells you about the best antiviruses  
                   to choose in 2023`,
    },
    {
      department: "Cotent",
      title: "Best skills to teach child?",
      author: "Shobhit Sharma",
      designation: "TCE",
      info: `Worried about your PC safety? No Problem,  
                   this post tells you about the best antiviruses  
                   to choose in 2023`,
    },
    {
      department: "Cotent",
      title: "Best skills to teach child?",
      author: "Shobhit Sharma",
      designation: "TCE",
      info: `Worried about your PC safety? No Problem,  
                   this post tells you about the best antiviruses  
                   to choose in 2023`,
    },
  ];

  return (
    <>
      <div className="w-full h-[10rem] bg-yellow">
        <h1 className="text-5xl text-center font-bold font-mono pt-10">
          Welcome to our Blogs Page
        </h1>
        <h1 className="text-center text-white text-3xl">
          "Embrace the power of reading to shape a brighter future for your
          child."
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 p-8">
        {postData.map((e) => {
          return <Blog content={e} />;
        })}
      </div>
    </>
  );
}

export default BlogPage;
