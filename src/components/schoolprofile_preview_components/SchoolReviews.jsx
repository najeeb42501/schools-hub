import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  Rating,
  CardHeader,
} from "@mui/material";

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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        School Reviews
      </h1>
      {userType === "user" && (
        <Card raised sx={{ mb: 4, p: 2 }}>
          <CardHeader
            title="Write a Review"
            titleTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Rating
                  name="rating"
                  value={rating}
                  precision={0.5}
                  onChange={handleRatingChange}
                />
                <TextField
                  label="Your Review"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  value={review}
                  onChange={handleReviewChange}
                  variant="outlined"
                  sx={{ mt: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#2F6D75",
                    "&:hover": { backgroundColor: "#07393C" },
                  }}
                >
                  Submit Review
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Previous Reviews
        </Typography>
        {reviewsData.map((review, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar>{review.reviewerName[0]}</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1">
                    {review.reviewerName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {review.date}
                  </Typography>
                  <Rating value={review.rating} readOnly />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {review.comment}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default SchoolReviews;
