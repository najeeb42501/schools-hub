import React, { useState } from "react";

function SchoolGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (url) => {
    setSelectedImage(url);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10 py-10">
        School Gallery
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-10 pb-10 ">
        {images.map((url, index) => {
          return (
            <div
              key={index}
              className="relative group"
              onClick={() => handleClick(url)}
            >
              <img
                src={url}
                className="h-80 w-full object-cover rounded-md transition duration-300 transform group-hover:scale-105"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 rounded-md flex justify-center items-center">
                <p className="text-white text-lg font-bold">View Image</p>
              </div>
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <img src={selectedImage} className="h-96" alt="" />
            <button
              onClick={handleClose}
              className="text-white absolute top-0 right-0 m-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SchoolGallery;
