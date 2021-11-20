import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

import SingleProduct from "../SingleProduct/SingleProduct";
import { useState } from "react";
import { useEffect } from "react";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, color: "success.main", m: 5 }}
          variant="h6"
          component="div"
        >
          Our Products
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.slice(0, 6).map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeProducts;
