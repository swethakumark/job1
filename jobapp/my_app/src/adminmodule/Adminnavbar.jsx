import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Admin user icon
import WorkIcon from '@mui/icons-material/Work'; // Job icon
import { Link } from 'react-router-dom';

// Custom theme with black and white color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black sidebar background
    },
    text: {
      primary: '#ffffff', // White text for sidebar items
    },
  },
});

const Adminnavbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" sx={{width: 240,flexShrink: 0,'& .MuiDrawer-paper': {width: 240,backgroundColor: '#000000', // Black background
            color: '#ffffff', // White text
          },
        }}>
        <div>
          {/* Admin Icon on top */}
          <IconButton sx={{ justifyContent: 'center', display: 'flex', marginTop: 2 }}>
            <AccountCircle sx={{ fontSize: 60, color: '#ffffff' }} /> {/* Admin user icon */}
          </IconButton>
          <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 1 }}>
            Admin Panel
          </Typography>

          {/* Sidebar Navigation Buttons */}
          <List>
            {/* Admin Dashboard Button */}
            <Link to="/admindashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Admin Dashboard" />
              </ListItem>
            </Link>

            {/* Manage Jobs Button */}
            <Link to="/managejobspage" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage Jobs page" />
              </ListItem>
            </Link>


            <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default Adminnavbar;
