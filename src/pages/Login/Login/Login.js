import {
  Alert,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { user, loginUser, isLoading, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: 20 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          {user?.email && <Alert severity="success">User Logged in</Alert>}

          {!isLoading && (
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                onBlur={handleOnchange}
                name="email"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                variant="standard"
                type="password"
                name="password"
                onBlur={handleOnchange}
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Pleace Register</Button>
              </NavLink>
            </form>
          )}
          <h3>OR</h3>
          <Button
            onClick={() => signInWithGoogle(location, history)}
            sx={{ width: "75%", m: 1 }}
            variant="contained"
            type="submit"
          >
            SignIn with Google
          </Button>
          {isLoading && <LinearProgress />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
