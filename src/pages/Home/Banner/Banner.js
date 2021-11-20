import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bannerImg from "../../../images/top-bannert.png";
import { Button, Container, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

const varticalCenter = {
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
};

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ ...varticalCenter, textAlign: "left" }}
          >
            <Box>
              <Typography variant="p">-</Typography>
              <Typography variant="p">Welcome to Car Hut</Typography>

              <Typography variant="h2" sx={{ my: 3, fontWeight: 300 }}>
                Buy The Best Quality Car's With Us
              </Typography>
              <Typography variant="h6">
                Find cars for sale, local dealers, and advice. Also, our
                price-badging and price-drop notifications keep you informed of
                potential deals.
              </Typography>
              <Button
                sx={{ my: 5, backgroundColor: "red" }}
                variant="contained"
              >
                Buy Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={varticalCenter}>
            <img style={{ width: "100%" }} src={bannerImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
