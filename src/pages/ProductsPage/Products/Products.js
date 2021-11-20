import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Product/Product";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import SingleProduct from "../../Home/SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [bookingDone, setbookingDone] = useState(false);
  return (
    <Container>
      <h1>All Products</h1>
      {bookingDone && <Alert severity="success">Product Book done</Alert>}
      <Grid container spacing={2}>
        {products.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            // setbookingDone={setbookingDone}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
