import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle'; // User icon
import WorkIcon from '@mui/icons-material/Work'; // Job icon
import { Link } from 'react-router-dom';

// Create a custom theme with black and white color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black background for the sidebar
    },
    text: {
      primary: '#ffffff', // White text for the sidebar items
    },
  },
});

const Usernavbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" sx={{width: 240,flexShrink: 0,'& .MuiDrawer-paper': {width: 240,
            backgroundColor: '#000000', // Black sidebar background
            color: '#ffffff', // White text
          },
        }}>
        <div>
          {/* User Icon on top */}
          <IconButton sx={{ justifyContent: 'center', display: 'flex', marginTop: 2 }}>
            <AccountCircle sx={{ fontSize: 60, color: '#ffffff' }} /> {/* Medium-sized user icon */}
          </IconButton>
          <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 1 }}>
            User
          </Typography>
          {/* Sidebar Navigation Buttons */}
          <List>
            <Link to="/Userdashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="User Dashboard" />
              </ListItem>
            </Link>
           <Link to="/browsejobspage" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Browse Jobs" />
              </ListItem>
            </Link>

            <Link to="/appliedjobs" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Applied Jobs" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};
export default Usernavbar;
