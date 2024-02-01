import React from "react";

const Rating = ({ ratingValue }) => {
  const maxRating = 5; // Assuming a maximum rating of 5 stars
  const starInputs = [];
  console.log(ratingValue);

  for (let i = 1; i <= maxRating; i++) {
    // Check if the current star should be checked based on the rating value
    const isChecked = i <= ratingValue;
    console.log(isChecked);

    starInputs.push(
      <input
        key={i}
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-orange-400"
        checked={isChecked}
        readOnly
      />
    );
  }

  return <div className="rating">{starInputs}</div>;
};

export default Rating;
