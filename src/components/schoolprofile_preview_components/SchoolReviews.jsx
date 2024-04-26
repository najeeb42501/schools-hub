import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Rating } from "@mui/material";
import { useAppContext } from "../../state/ContextAPI";

function SchoolReviews() {
  const { state } = useAppContext();
  const userType = state.type;
  const userName = state.username;

  const { schoolID } = useParams();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewsData, setReviewsData] = useState([]);
  const [ratingError, setRatingError] = useState(false);
  const [reviewError, setReviewError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getSchoolData/school-reviews/${schoolID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schools data");
        }
        const data = await response.json();

        console.log("Schools Reviews : ", data);
        setReviewsData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching schools data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
    setRatingError(false); // Reset the rating error when a new rating is selected
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
    setReviewError(false); // Reset the review error when the review is typed
  };

  const handleSubmit = async () => {
    if (rating === 0) {
      setRatingError(true);
    }
    if (review.trim() === "") {
      setReviewError(true);
    }

    if (rating === 0 || review.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/editSchoolProfile/reviews/${schoolID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rating, review, userName }),
        }
      );
      if (response.ok) {
        console.log("Review submitted successfully");
        // Add code here to update the reviews state with the new review
      } else {
        console.error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <Container className="bg-gray-100 py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        School Reviews
      </h1>
      {userType === "user" && (
        <Box className="mt-4">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Write a Review</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Your Rating:</Typography>
              <Rating
                name="rating"
                value={rating}
                precision={0.5}
                onChange={handleRatingChange}
              />
              {ratingError && (
                <Typography variant="body2" color="error">
                  Rating is required
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Review"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={review}
                onChange={handleReviewChange}
                error={reviewError}
                helperText={reviewError && "Review is required"}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit Review
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      <Box className="mt-4">
        <Typography variant="h4">Previous Reviews</Typography>
        {reviewsData.map((review, index) => (
          <Box key={index} className="mt-2 p-4 border border-gray-300 rounded">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Avatar />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">
                  {review.reviewerName}
                </Typography>
                <Typography variant="body2">{review.date}</Typography>
                <Rating value={review.rating} readOnly />
                <Typography variant="body1">{review.comment}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default SchoolReviews;
