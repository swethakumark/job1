import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work'; // Job icon
import { Link } from 'react-router-dom';

// Create a custom theme with softer light pink color
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb2c1', // Softer light pink color for the AppBar
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left Side: Job Hub Heading */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <WorkIcon />
            </IconButton>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: 1 }}>
              Job Hub
            </Typography>
          </div>

          {/* Right Side: Navigation Buttons */}
          <div>
          <Link to="/">
          <Button color="inherit">Home</Button></Link>
          <Link to="/signup">
          <Button color="inherit">Signup</Button></Link>
          <Link to="/login">
          <Button color="inherit">Login</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
