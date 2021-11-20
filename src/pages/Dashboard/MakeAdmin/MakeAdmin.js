import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    const email = e.target.value;
    setEmail(email);
    console.log(email);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    e.preventDefault();
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: 20 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Make An Admin
          </Typography>
          {success && (
            <Alert severity="success">Successfully Made an Admin </Alert>
          )}

          <form onSubmit={handleAdminSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
              onBlur={handleOnBlur}
              type="email"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Make Admin
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MakeAdmin;
