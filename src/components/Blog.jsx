import React from "react";

function Blog(props) {
  return (
    // Accessing and Displaying the data passed as props
    <div>
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
                  Mar 16, 2023
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full  
                                               bg-gray-50 px-3 py-1.5  
                                               font-medium text-gray-600  
                                               hover:bg-gray-100"
                >
                  {props.content.department}
                </a>
              </div>
              <div className="group relative">
                <h3
                  className="mt-3 text-lg font-semibold  
                                               leading-6 text-gray-900  
                                               group-hover:text-gray-600"
                >
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {props.content.title}
                  </a>
                </h3>
                <p
                  className="mt-5 line-clamp-3 text-sm  
                                              leading-6 text-gray-600"
                >
                  {props.content.info}
                </p>
              </div>
              <div
                className="relative mt-8 flex  
                                            items-center gap-x-4"
              >
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  className="h-10 w-10 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11.5 12 C 10.671875 12 10 12.671875 10 13.5 C 10 14.328125 10.671875 15 11.5 15 C 12.328125 15 13 14.328125 13 13.5 C 13 12.671875 12.328125 12 11.5 12 Z M 18 13 L 18 15 L 23 15 L 23 13 Z M 20.96875 17.03125 C 20.96875 18.714844 20.292969 19.882813 19.3125 20.71875 C 18.332031 21.554688 17.035156 22 16 22 C 13.878906 22 12.4375 21.140625 11.3125 20.03125 L 9.90625 21.46875 C 11.300781 22.839844 13.320313 24 16 24 C 17.554688 24 19.261719 23.414063 20.625 22.25 C 21.988281 21.085938 22.96875 19.289063 22.96875 17.03125 Z"></path>
                  </g>
                </svg>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {props.content.author}
                    </a>
                  </p>
                  <p className="text-gray-600">{props.content.designation}</p>
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
