import { Grid } from "@mui/material";
import * as React from "react";
import Orders from "../Orders/Orders";

const DashboardHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} sm={7}>
        <Orders />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
