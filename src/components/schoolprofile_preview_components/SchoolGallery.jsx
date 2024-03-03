import React from "react";

function SchoolGallery({ images }) {
  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-bold py-4">SCHOOL GALLERY</h1>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2">
        {images.map((url, index) => {
          return (
            <img src={url} key={index} className="h-80 w-full p-2 " alt="" />
          );
        })}
      </div>
    </div>
  );
}

export default SchoolGallery;
