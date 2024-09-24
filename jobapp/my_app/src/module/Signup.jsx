import React from 'react';
import { Box, Typography, TextField, Button, Divider, Grid } from '@mui/material';
import { FaFacebookF, FaGoogle } from 'react-icons/fa'; // React icons for Facebook and Google
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
  return (
    <>
    <Navbar></Navbar>
    <Box sx={{width: { xs: '50%', sm: '300px' }, // Width remains the same
        margin: '30px auto', padding: '8px', // Reduced padding for lower height
        backgroundColor: '#f9f9f9',boxShadow: '0px 0px 8px rgba(0,0,0,0.1)', // Softer shadow
        borderRadius: '8px',}}>  
      {/* Step 1: Signup page heading */}
      <Typography variant="h6" align="center" gutterBottom sx={{ color: '#880e4f' }}>
        signup
      </Typography>
      {/* Step 2: Small content */}
      <Typography variant="body2" align="center" gutterBottom sx={{ marginBottom: '8px' }}>
        Sign up to see job vacancies from Companies
      </Typography>
      {/* Step 3: Login with Facebook and Google */}
      <Grid container spacing={1} justifyContent="center" sx={{ marginBottom: '8px' }}>
        <Grid item>
          <Button variant="contained" startIcon={<FaFacebookF />}sx={{ backgroundColor: '#3b5998', color: '#fff', fontSize: '0.8rem', padding: '5px 8px' }}>
            Facebook
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<FaGoogle />}sx={{ backgroundColor: '#db4437', color: '#fff', fontSize: '0.8rem', padding: '5px 8px' }}>
            Google
          </Button>
        </Grid>
      </Grid>
      {/* Step 4: Divider with 'OR' */}
      <Divider sx={{ marginY: '8px' }}>OR</Divider>
      {/* Step 5-11: Signup form */}
      <Box component="form" sx={{ marginTop: '10px' }}noValidate autoComplete="off">
        {/* Step 5: Name */}
        <TextField fullWidth label="Name" margin="dense" variant="outlined"size="small"/>
        {/* Step 6: Email */}
        <TextField fullWidth label="Email" margin="dense" variant="outlined" size="small"/>
        {/* Step 6: Mobile Number */}
        <TextField fullWidth label="Mobile Number" margin="dense" variant="outlined" size="small"/>
        {/* Step 7: Qualification */}
        <TextField fullWidth label="Qualification"margin="dense"variant="outlined"size="small"/>
        {/* Step 8: Password */}
        <TextField fullWidth label="Password"type="password"margin="dense" variant="outlined"size="small"/>
        {/* Step 9: Confirm Password */}
        <TextField fullWidth label="Confirm Password" type="password" margin="dense" variant="outlined" size="small"/>
        {/* Step 10: Choose File */}
        <Button variant="contained"component="label"
          fullWidth
          sx={{ marginTop: '10px', marginBottom: '10px', fontSize: '0.8rem', padding: '5px 8px' }}>
          Choose File
          <input type="file" hidden />
        </Button>
        {/* Step 11: Signup button */}
        <Link to='/login'>
        <Button fullWidth variant="contained"color="primary"
          sx={{ backgroundColor: '#880e4f', color: '#fff', fontSize: '0.9rem', padding: '8px 12px', marginBottom: '8px' }}>Sign Up
        </Button>
        </Link>
      </Box>
      {/* Step 12: Small content about terms */}
      <Typography variant="body2" align="center" color="textSecondary" gutterBottom sx={{ marginTop: '6px' }}>
        By signing up, you agree to our <Link href="#">Terms</Link>, <Link href="#">Data Policy</Link> and <Link href="#">Cookies Policy</Link>.
      </Typography>
      {/* Step 13: Already have an account? */}
      <Typography variant="body2" align="center" sx={{ marginTop: '4px' }}>
        Have an account?  <Link to="/login">Login</Link>
      </Typography>
    </Box>
    </>
  );
};

export default Signup;