import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";

const DownloadApp = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants for the mobile image
  const imageVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9 },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: "#fef7e0",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        mt: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    color: "#1a1a1a",
                    mb: 1,
                    lineHeight: 1.2,
                  }}
                >
                  Download the app now!
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    color: "#666",
                    mb: 3,
                    fontWeight: 500,
                  }}
                >
                  Scan the QR code to download the app
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    color: "#4a5568",
                    mb: 4,
                    maxWidth: 500,
                  }}
                >
                  Experience seamless online ordering only on the app. Fast
                  delivery, exclusive offers, and order the food on your
                  fingertips.
                </Typography>
              </motion.div>

              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "#000",
                    "&:hover": { bgcolor: "#333" },
                    textTransform: "none",
                    py: 1.2,
                    px: 3,
                    borderRadius: 2,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="caption"
                      sx={{ display: "block", fontSize: "0.7rem" }}
                    >
                      GET IT ON
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Button>

                {/* App Store Button */}
                <Button
                  variant="contained"
                  href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "#000",
                    "&:hover": { bgcolor: "#000000" },
                    textTransform: "none",
                    py: 1.2,
                    px: 3,
                    borderRadius: 2,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="caption"
                      sx={{ display: "block", fontSize: "0.7rem" }}
                    >
                      Download on the
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      App Store
                    </Typography>
                  </Box>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: "flex", gap: 3, mt: 4, flexWrap: "wrap" }}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#f7b32b" }}
                    >
                     need to be listed
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      Restaurants
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#f7b32b" }}
                    >
                     about to start
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      Cities
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#f7b32b" }}
                    >
                     about to start
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      Orders Delivered
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Mobile Image with Smooth Scroll-Up Animation */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              style={{ display: "inline-block" }}
            >
              <Box
                component="img"
                src="/image-1.png"
                alt="App img"
                sx={{
                  width: "100%",
                  maxWidth: 380,
                  height: "auto",
                  filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.1))",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
