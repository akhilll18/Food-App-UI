import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 8 },
        py: 5,
        backgroundColor: "#a3d9c1",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Sections */}
      <Grid container spacing={4} justifyContent="space-between">
        
        {/* Social */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ mb: 1 }}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/642b0eecbf1a463620372135/7da53f84-bfbf-43e0-a9e9-6ee523e1575c/Foyer_Logo_Cream.png?format=1500w"
              alt="Footer Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </Box>

          <Typography sx={heading}>Social Links</Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <SocialIcon link="https://facebook.com">
              <FaFacebook />
            </SocialIcon>

            <SocialIcon link="https://twitter.com">
              <FaXTwitter />
            </SocialIcon>

            <SocialIcon link="https://instagram.com">
              <FaInstagram />
            </SocialIcon>

            <SocialIcon link="https://youtube.com">
              <FaYoutube />
            </SocialIcon>
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography sx={heading}>Company</Typography>
          <FooterLink text="About" to="/about" />
          <FooterLink text="Services" to="/services" />
          <FooterLink text="Careers" to="/careers" />
        </Grid>

        {/* Contact */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography sx={heading}>Contact Us</Typography>
          <FooterLink text="Help & Support" to="/contact-us" />
          <FooterLink text="Partner with us" to="/partner" />
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography sx={heading}>Legal</Typography>
          <FooterLink text="Terms & Conditions" to="/terms" />
          <FooterLink text="Privacy Policy" to="/privacy" />
        </Grid>

        {/* Available In */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography sx={heading}>Available In</Typography>
          <FooterLink text="India" to="/india" />
          <FooterLink text="USA" to="/usa" />
          <FooterLink text="UK" to="/uk" />
        </Grid>
      </Grid>

      {/* App Section */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography sx={{ fontSize: "16px", color: "#444", mb: 2 }}>
          For better experience, download the foyer app now
        </Typography>

        <Box>
          <a href="https://play.google.com" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              style={{
                width: "150px",
                height: "50px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{
                width: "150px",
                height: "47px",
                cursor: "pointer",
              }}
            />
          </a>
        </Box>
      </Box>

      {/* Bottom */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography sx={{ fontSize: "14px", color: "#555" }}>
          © {new Date().getFullYear()} Foyer. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

/* ✅ Updated FooterLink with Scroll to Top */
const FooterLink = ({ text, to }) => (
  <Typography
    component={RouterLink}
    to={to}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // 🔥 Added
    sx={{
      display: "block",
      fontSize: "14px",
      color: "#2f4f4f",
      mb: 0.8,
      textDecoration: "none",
      transition: "0.2s",
      "&:hover": {
        color: "#000",
      },
    }}
  >
    {text}
  </Typography>
);

/* Social Icon */
const SocialIcon = ({ children, link }) => (
  <Box
    component="a"
    href={link}
    target="_blank"
    rel="noreferrer"
    sx={{
      fontSize: "20px",
      color: "#2f4f4f",
      cursor: "pointer",
      transition: "0.2s",
      textDecoration: "none",
      "&:hover": {
        color: "#000",
      },
    }}
  >
    {children}
  </Box>
);

const heading = {
  fontWeight: 600,
  mb: 1.5,
  color: "#1e3d3d",
};

export default Footer;