import React from "react";
import RatingStars from "../RatingStars";

function SchoolReviews({ reviews }) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">School Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src={review.avatar} // Replace with the source of the reviewer's avatar
                alt={`Avatar of ${review.reviewerName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
              <p className="text-gray-600">{review.date}</p>
            </div>
          </div>
          <p className="text-gray-800 mb-2">{review.comment}</p>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">{review.rating}/5</span>
            <div className="flex">
              <RatingStars ratingValue={review.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SchoolReviews;
