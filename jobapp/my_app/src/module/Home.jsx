import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';

// Link to Google Fonts for Lillybell font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Lillybell&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Create a custom theme with contrasting colors and Lillybell font
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081', // Bright pink for accents
    },
    secondary: {
      main: '#ffffff', // White for footer text
    },
  },
  typography: {
    fontFamily: '"Lillybell", cursive',
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#333333', // Dark gray for better contrast
    },
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.7',
      textAlign: 'center',
      color: '#333333', // Dark gray for body text
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      
      <Navbar />
      <Container maxWidth="md" sx={{ paddingTop: '100px', textAlign: 'center' }}>
        {/* Attractive Heading */}
        <Typography variant="h1" gutterBottom>Welcome to Your Future</Typography>
        {/* Short, Colorful Content */}
        <Typography variant="body1" paragraph> Find your dream job today.
          <br />
          Explore opportunities in tech, design, and marketing.
          <br />
          Start your journey with us and discover amazing roles.
          <br />
          Your future awaits, make it count.
          <br />
          Thousands of careers are just one click away.
          <br />
          Begin your success story with us!
        </Typography>
      </Container>

      {/* Footer */}
      {/* <Box
        sx={{ backgroundColor: '#ff4081', padding: '20px', textAlign: 'center',marginTop: '100px',}}>
        <Typography variant="body2" color="secondary">© 2024 Your Company. All rights reserved.</Typography>
      </Box> */}
    </ThemeProvider>
  );
};

export default Home;
