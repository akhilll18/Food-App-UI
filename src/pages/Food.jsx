// pages/Food.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import food1 from "../assets/images/Categories/food1.png";
import food2 from "../assets/images/Categories/food2.png";
import food3 from "../assets/images/Categories/food3.png";

const Food = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 5, fontFamily: "Poppins, sans-serif" }}>

      {/* 🔥 TITLE SECTION */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 700,
            background: "linear-gradient(90deg, #ff5a00, #ff8c42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Food Services 🍔
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#555",
            fontSize: { xs: "14px", md: "18px" },
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Choose how you want your food — from restaurants, home chefs, or even get it delivered straight from your own home.
        </Typography>
      </Box>

      {/* 🍽️ SECTION 1 — RESTAURANTS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          mb: 10,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img src={food1} alt="food"   style={{ width: "80%", borderRadius: "16px" }}/>
         
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600}>
            Restaurants
          </Typography>

          <Typography mt={2} color="text.secondary">
            Order food from nearby restaurants with a wide variety of cuisines.
            Explore menus, choose your favorite dishes, and enjoy fast delivery.
            This option is perfect for those who want restaurant-style food at
            their convenience. All services are available within a 5 km radius
            to ensure freshness and quick delivery.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, borderRadius: "20px" }}
            onClick={() => navigate("/food/restaurants")}
          >
            Order from Restaurants
          </Button>
        </Box>
      </Box>

      {/* ☁️ SECTION 2 — CLOUD KITCHEN */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          mb: 10,
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img src={food2} alt="food"   style={{ width: "80%", borderRadius: "16px" }}/>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600}>
            Cloud Kitchen / Home Chefs
          </Typography>

          <Typography mt={2} color="text.secondary">
            This section connects you with passionate home cooks and small-scale
            chefs. They prepare fresh meals and list them on the app for users to
            order. It is a great option if you prefer homemade, healthy food.
            All services operate within a 5 km radius to ensure quality and
            timely delivery.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, borderRadius: "20px" }}
            onClick={() => navigate("/food/cloud-kitchen")}
          >
            Explore Home Chefs
          </Button>
        </Box>
      </Box>

      {/* 🍱 SECTION 3 — SELF FOOD DELIVERY */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          mb: 10,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img src={food3} alt="food"   style={{ width: "80%", borderRadius: "16px" }}/>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600}>
            Self Food Delivery (From Your Home)
          </Typography>

          <Typography mt={2} color="text.secondary">
             This feature allows you to get food
            directly from your home. If you forget your lunch, your food is not
            ready on time, or it may get cold, a delivery person will pick it up
            from your home and bring it to you. This service works within a 5 km
            radius to ensure timely and reliable delivery.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, borderRadius: "20px" }}
            onClick={() => navigate("/food/home-food")}
          >
            Get Food from Home
          </Button>
        </Box>
      </Box>

    </Container>
  );
};

export default Food;