import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";

function BlogPage() {
  // Adding Dummy Data to pass as props
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/admin/get-blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Response DATA SO : ", data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogsData();
  }, []);

  return (
    <>
      <div className="w-full h-[10rem] bg-gray-100">
        <h1 className="text-5xl text-center font-bold font-mono pt-10">
          Welcome to our Blogs Page
        </h1>
        <h1 className="text-center text-cariGreen text-3xl">
          "Embrace the power of reading to shape a brighter future for your
          child."
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-20 p-8 ">
        {blogs.map((blog) => {
          return <Blog blog={blog} />;
        })}
      </div>
    </>
  );
}

export default BlogPage;
