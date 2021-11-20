import {
  Button,
  Container,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { TextareaAutosize } from "@material-ui/core";

const AddReview = () => {
  const [reviewData, setReviewData] = useState({});
  const [star, setStar] = useState(1);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewDdata = { ...reviewData, star: star };
    newReviewDdata[field] = value;
    setReviewData(newReviewDdata);
  };
  const handleReview = (e) => {
    fetch(`http://localhost:5000/addReview`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Car Added Sucessfully");
        }
      });
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: 20 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Add Product
          </Typography>

          <form onSubmit={handleReview}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Name"
              variant="standard"
              onBlur={handleOnBlur}
              name="name"
              type="text"
            />

            <TextareaAutosize
              onBlur={handleOnBlur}
              name="description"
              aria-label="minimum height"
              minRows={5}
              placeholder="Review"
              style={{ width: "75%" }}
            />
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue);
              }}
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Year"
              variant="standard"
              type="text"
              name="year"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Color"
              variant="standard"
              type="text"
              name="color"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Fual-Type"
              variant="standard"
              type="text"
              name="fual"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Engine"
              variant="standard"
              type="text"
              name="engine"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Image Url"
              variant="standard"
              type="text"
              name="img"
              onBlur={handleOnBlur}
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Add Product
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddReview;
