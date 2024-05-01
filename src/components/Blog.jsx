import React from "react";
import { useNavigate } from "react-router-dom";

function Blog({ blog }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the blog page

    navigate(`/blogs/${blog._id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer school-details-card">
      <div className="bg-white shadow-2xl w-96">
        <div className="mx-auto max-w-7xl ">
          <div
            className="mx-5 grid max-w-2xl  
                                    grid-cols-1 gap-x-8  
                                    gap-y-16 p-10 lg:grid-cols-1"
          >
            <article
              className="flex max-w-xl flex-col  
                                            items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2023-03-16" className="text-gray-500">
                  {blog.date}
                </time>
              </div>
              <div className="group relative">
                <h3
                  className="mt-3 text-lg font-semibold  
                                               leading-6 text-gray-900  
                                               group-hover:text-gray-600"
                >
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Title: {blog.title}
                  </a>
                </h3>
                <hr className="border-1 w-full my-2" />
                <p
                  className="mt-5 line-clamp-3 text-sm  
                                              leading-6 text-gray-600"
                >
                  {blog.content}
                </p>
              </div>
              <div
                className="relative mt-8 flex  
                                            items-center gap-x-4"
              >
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      By_{blog.author}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
