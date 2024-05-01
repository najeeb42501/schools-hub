import React, { useState } from "react";

function EditSchoolGallery({ id }) {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then(
      (images) => {
        setImages(images);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleSave = async () => {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/save-school-gallery-images/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Images saved successfully");
      alert("Images saved successfully");
    } catch (error) {
      console.error("Error saving images:", error);
      alert("Failed to save images");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        School Gallery
      </h2>
      <div className="mb-4">
        <label>Add Images to the School Gallery by uploading.</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-gray file:text-black
            hover:file:bg-yellow
          "
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Uploaded Preview ${index}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-6 px-6 py-2 bg-black text-white text-lg rounded hover:bg-yellow focus:outline-none focus:ring-2  focus:ring-opacity-50"
      >
        Save Gallery
      </button>
    </div>
  );
}

export default EditSchoolGallery;
