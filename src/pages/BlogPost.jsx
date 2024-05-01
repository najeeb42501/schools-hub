import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function BlogPost() {
  const [blog, setBlog] = useState({});
  const { blogID } = useParams();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/admin/blog/${blogID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogData();
  }, [blogID]);

  return (
    <div className="container mx-auto mt-8 max-h-full min-h-screen ">
      <div className="bg-white shadow-md p-28 m-20">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <hr className="my-6" />

        <ReactQuill value={blog.content || ""} readOnly={true} theme={null} />
        <hr className="my-6" />
        <div className="mt-8 text-sm font-semibold text-gray-900">
          Author: {blog.author}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
