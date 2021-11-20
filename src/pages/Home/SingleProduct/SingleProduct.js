import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const SingleProduct = (props) => {
  const { name, description, img } = props.product;
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Rating name="read-only" value={5} readOnly />
          <Button variant="outlined" style={{ marginLeft: "auto" }}>
            {" "}
            Buy Now
          </Button>
        </CardActions>
        <Collapse timeout="auto" unmountOnExit></Collapse>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
