import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { TextareaAutosize } from "@material-ui/core";

const AddProduct = () => {
  const [productData, setProductData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...productData };
    newData[field] = value;
    setProductData(newData);
  };
  const handleAddProduct = (e) => {
    fetch(`http://localhost:5000/addProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
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

          <form onSubmit={handleAddProduct}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Car Name"
              variant="standard"
              onBlur={handleOnBlur}
              name="name"
              type="text"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Price"
              variant="standard"
              onBlur={handleOnBlur}
              name="price"
              type="text"
            />
            <TextareaAutosize
              onBlur={handleOnBlur}
              name="description"
              aria-label="minimum height"
              minRows={5}
              placeholder="Description"
              style={{ width: "75%" }}
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

export default AddProduct;
