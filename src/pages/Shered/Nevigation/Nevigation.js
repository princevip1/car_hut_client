import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const Nevigation = () => {
  const { user, logOut, admin } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Hut
          </Typography>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/products"
          >
            <Button color="inherit">Product</Button>
          </NavLink>

          {admin ? (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard"
            >
              <Button color="inherit">Dashboard</Button>
            </NavLink>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/order"
            >
              <Button color="inherit">My Order</Button>
            </NavLink>
          )}

          {user?.email ? (
            <Button
              style={{ textDecoration: "none", color: "white" }}
              onClick={logOut}
              color="inherit"
            >
              LogOut
            </Button>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nevigation;
