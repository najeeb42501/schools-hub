import React, { useState } from "react";
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

function SchoolReviews({ reviews }) {
  const { state } = useAppContext();
  const userType = state.type;

  console.log("User type school profile :", state.type);
  const { schoolID } = useParams();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/school/reviews/:id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, review }),
      });
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
    <Container>
      {userType == "user" && (
        <Box mt={4}>
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

      <Box mt={4}>
        <Typography variant="h4">Previous Reviews</Typography>
        {reviews.map((review, index) => (
          <Box
            key={index}
            mt={2}
            p={2}
            border="1px solid #ccc"
            borderRadius={4}
          >
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
