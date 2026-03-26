import React from "react";
import { Box, Typography, Button, Container, Grid, Card } from "@mui/material";

const cardStyle = {
  textAlign: "center",
  p: 3,
  borderRadius: 3,
  height: "100%",
  backgroundColor: "#f6f9f4",
  transition: "transform 0.3s",
  "&:hover": { transform: "translateY(-5px)" },
};

const DeliveryPartner = () => {
  return (
    <Box>

     
      <Box sx={{ backgroundColor: "#fff", py: 6 }}>
        <Container maxWidth="lg">

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              flexDirection: { xs: "column", md: "row" },
            }}
          >

        
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#2c3e2f",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Become a Delivery Partner
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "#4a5568",
                  mb: 3,
                }}
              >
                Join our delivery network and start earning with every delivery.
                Choose your schedule, deliver on your terms, and get paid weekly.
                Be your own boss and earn money delivering happiness.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#f7b32b",
                  "&:hover": { bgcolor: "#f59e0b" },
                  borderRadius: "10px",
                  px: 4,
                  py: 1,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Start Delivering
              </Button>
            </Box>

            <Box sx={{ flex: 1 }}>
              <img
                src="/delivery-partner.png"
                alt="Delivery Partner"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                }}
              />
            </Box>

          </Box>
        </Container>
      </Box>

     
      <Container maxWidth="lg" sx={{ py: 6 }}>

      
        <Box sx={{ textAlign: "center", mb: 6, mt: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, color: "#2c3e2f" }}
          >
            Delivery Partner Benefits
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: "#666",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Join thousands of delivery partners already earning with us
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={2} sx={{ mb: 8 }}>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="h2">💰</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#f7b32b", mt: 1 }}>
                ₹500+
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                Average daily earnings
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="h2">⭐</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#f7b32b", mt: 1 }}>
                4.8
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                Average partner rating
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="h2">🛵</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#f7b32b", mt: 1 }}>
                10k+
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                Active delivery partners
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="h2">📦</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#f7b32b", mt: 1 }}>
                50k+
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                Deliveries completed daily
              </Typography>
            </Card>
          </Grid>

          {/* FULL WIDTH CARD */}
          <Grid item xs={12}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                backgroundColor: "#f6f9f4",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <Typography variant="h2">🤗</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#f7b32b", mt: 1 }}>
                95%
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                Happy delivery partners
              </Typography>
            </Card>
          </Grid>

        </Grid>

      </Container>

    </Box>
  );
};

export default DeliveryPartner;