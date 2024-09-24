import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { FaFacebookF, FaGoogle } from "react-icons/fa"; // React icons for Facebook and Google
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: { xs: "90%", sm: "320px" }, // Same width as signup
          margin: "30px auto",
          padding: "10px", // Same padding
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 0px 8px rgba(0,0,0,0.1)", // Same shadow
          borderRadius: "8px", // Same rounded corners
        }}>
        {/* Step 1: Login page heading */}

        <Typography variant="h6" align="center"gutterBottom sx={{ color: "#880e4f" }}>
          Login
        </Typography>
        {/* Step 2: Small content */}
        <Typography variant="body2"align="center"gutterBottom sx={{ marginBottom: "8px" }}>
          Log in to see job vacancies from Companies
        </Typography>
        {/* Step 3: Login with Facebook and Google */}
        <Grid container spacing={1} justifyContent="center" sx={{ marginBottom: "8px" }}>
          <Grid item>
            <Button variant="contained"startIcon={<FaFacebookF />}
              sx={{backgroundColor: "#3b5998",color: "#fff",fontSize: "0.8rem",padding: "5px 8px",}}>
              Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained"startIcon={<FaGoogle />}
              sx={{backgroundColor: "#db4437",color: "#fff",fontSize: "0.8rem",padding: "5px 8px"}}>
              Google
            </Button>
          </Grid>
        </Grid>
        {/* Step 4: Divider with 'OR' */}
        <Divider sx={{ marginY: "8px" }}>OR</Divider>
        {/* Step 5-9: Login form */}
        <Box component="form"sx={{ marginTop: "10px" }}noValidateautoComplete="off">
          {/* Step 5: Email */}
          <TextField fullWidth label="Email"  margin="dense" variant="outlined"size="small"/>
          {/* Step 6: Password */}
          <TextField fullWidth label="Password" type="password"margin="dense"variant="outlined"size="small"/>
          {/* Step 7: Login button */}
          <Link to="/userdashboard">
          <Button fullWidth variant="contained" color="primary"
            sx={{ backgroundColor: "#880e4f",color: "#fff",fontSize: "0.9rem",padding: "8px 12px",marginTop: "10px",marginBottom: "10px",}}>
            Log In           </Button>
          </Link>
        </Box>
        {/* Step 8: Forgot password link */}
        <Typography variant="body2" align="center" sx={{ marginBottom: "8px" }}>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        {/* Step 9: No account link */}
        <Typography variant="body2" align="center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Login;
