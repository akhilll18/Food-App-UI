import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import hero from "../assets/images/Categories/hero.png";

const categories = [
  {
    title: "FOOD",
    subtitle: "From restaurants",
    offer: "UPTO 60% OFF",
    path: "/categories/food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "GROCERIES",
    subtitle: "Instant essentials",
    offer: "UPTO 50% OFF",
    path: "/categories/grocery",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
  {
    title: "FASHION",
    subtitle: "Trendy styles",
    offer: "UPTO 40% OFF",
    path: "/categories/fashion",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
];

const Categeious = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "350px", md: "500px" },
          position: "relative",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.3))",
          }}
        />

        {/* Text */}
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", md: "48px" },
              color: "#fff",
              maxWidth: "700px",
            }}
          >
            Eat. Shop. Style. All on Foyer.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#ddd",
              fontSize: { xs: "14px", md: "18px" },
              maxWidth: "500px",
            }}
          >
            Discover a smarter way to order food, groceries, and fashion essentials.
          </Typography>
        </Container>
      </Box>

      {/* 🔥 CARDS SECTION */}
      <Box
        sx={{
          py: 6,
          px: 2,
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          backgroundColor: "#fff",
        }}
      >
        {categories.map((item, index) => (
          <Card
            key={index}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top
              navigate(item.path);
            }}
            sx={{
              width: 280,
              height: 200,
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.75)",
              }}
            />

            {/* Content */}
            <CardContent sx={{ position: "relative", zIndex: 2 }}>
              <Typography fontWeight="bold" color="#fff">
                {item.title}
              </Typography>

              <Typography fontSize="14px" color="#eee" mb={1}>
                {item.subtitle}
              </Typography>

              <Chip
                label={item.offer}
                size="small"
                sx={{
                  backgroundColor: "#fff",
                  color: "#ff5a00",
                  fontWeight: "bold",
                }}
              />
            </CardContent>

            {/* Arrow */}
            <Box
              sx={{
                position: "absolute",
                bottom: 15,
                left: 15,
                backgroundColor: "#ff5a00",
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <ArrowForwardIcon />
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Categeious;