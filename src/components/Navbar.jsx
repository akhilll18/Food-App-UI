import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handlePartnerClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePartnerClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box className="drawer-menu" onClick={handleDrawerToggle}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/categories">
          <ListItemText primary="Categories" />
        </ListItem>

        <ListItem button component={Link} to="/partner/home-chef">
          <ListItemText primary="Home Chef Partner" />
        </ListItem>

        <ListItem button component={Link} to="/partner/merchant">
          <ListItemText primary="Merchant Partner" />
        </ListItem>

        <ListItem button component={Link} to="/partner/delivery">
          <ListItemText primary="Delivery Partner" />
        </ListItem>

        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>

        <ListItem button component={Link} to="/contact-us">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" className="navbar">
        <Toolbar className="navbar-toolbar">

        
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box className="logo-section">
            <Link to="/" className="logo-link">
              <img
                className="nav-logo"
                src="https://foyermagazine.com/wp-content/uploads/2023/05/Foyer-Logo.png"
                alt="Logo"
              />
            </Link>
          </Box>

         
          <Box className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/categories" className="nav-link">Categories</Link>

         <span onClick={handlePartnerClick} className="nav-link">
  Partner With Us
</span>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handlePartnerClose}
            >
              <MenuItem component={Link} to="/partner/home-chef" onClick={handlePartnerClose}>
                Home Chef Partner
              </MenuItem>
              <MenuItem component={Link} to="/partner/merchant" onClick={handlePartnerClose}>
                Merchant Partner
              </MenuItem>
              <MenuItem component={Link} to="/partner/delivery" onClick={handlePartnerClose}>
                Delivery Partner
              </MenuItem>
            </Menu>

            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </Box>

          
          <Button
            variant="contained"
            color="success"
            href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Download App
          </Button>

        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;