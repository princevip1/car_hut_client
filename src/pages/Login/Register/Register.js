import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  LinearProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Register = () => {
  const history = useHistory();
  const location = useLocation();

  const { user, registerUser, isLoading, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password didn't Match ");
      return;
    }
    registerUser(
      loginData.name,
      loginData.email,
      loginData.password,
      history,
      location
    );
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: 20 }} item xs={12} md={12}>
          {user?.email && <Alert severity="success">User Created Done!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                variant="standard"
                onBlur={handleOnBlur}
                name="name"
                type="text"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                onBlur={handleOnBlur}
                name="email"
                type="email"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                variant="standard"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Re Type Your Password"
                variant="standard"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Register ? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <LinearProgress />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
