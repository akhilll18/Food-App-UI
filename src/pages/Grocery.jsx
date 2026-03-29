import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function GroceryHero() {
  const navigate = useNavigate();

  return (
    <Box>

      {/* 🔥 HERO TITLE */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 700,
            background: "linear-gradient(90deg, #2e7d32, #66bb6a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Grocery Services
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
          Shop fresh fruits, vegetables, dairy, and daily essentials — all delivered quickly to your doorstep.
        </Typography>
      </Box>

      {/* VEGETABLES */}
      <Box sx={{ px: 3, mb: 6 }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Fresh Vegetables
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {[
            { name: "Potato ", img: "https://t3.ftcdn.net/jpg/06/41/44/72/360_F_641447288_fdv334smXasb6Wc8m0RdeZpeQNMjkaDs.jpg" },
            { name: "Tomato ", img: "https://png.pngtree.com/png-vector/20250222/ourmid/pngtree-cluster-of-bright-red-cherry-tomatoes-arranged-in-a-neat-pattern-png-image_15543018.png" },
            { name: "Onion ", img: "https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-basket-of-fresh-red-onions-png-image_13405286.png" },
            { name: "Carrot ", img: "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-fresh-organic-carrots-in-a-neat-stack-png-image_14812590.png" },
            { name: "Cabbage ", img: "https://static.vecteezy.com/system/resources/previews/048/679/684/non_2x/cabbage-vegetable-isolated-group-of-cabbage-vegetables-illustration-png.png" },
            { name: "Cauliflower", img: "https://static.vecteezy.com/system/resources/previews/040/749/322/non_2x/ai-generated-cauliflower-cauliflower-vegetable-isolated-organic-vegetable-cauliflower-cauliflower-top-view-cauliflower-flat-lay-png.png" },
            { name: "Brinjal ", img: "https://png.pngtree.com/png-clipart/20240329/original/pngtree-eggplant-healthy-food-png-image_14703112.png" },
            { name: "Capsicum ", img: "https://static.vecteezy.com/system/resources/thumbnails/048/697/707/small/green-capsicum-isolated-on-transparent-background-png.png" },
            { name: "Green Chilli ", img: "https://zamaorganics.com/cdn/shop/files/1000_x_1000_px_14.png?v=1752748129" },
          ].map((item, i) => (
            <Box key={i} sx={{ minWidth: "120px", textAlign: "center" }}>
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 1,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <Typography fontSize="14px">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* FRUITS */}
      <Box sx={{ px: 3, mb: 6 }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Fresh Fruits
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {[
            { name: "Apple", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYVZbGis9_UABuzkKfIBkU_k0JQC95jC7sQ&s" },
            { name: "Banana", img: "https://images.apollo247.in/pd-cms/cms/2025-05/AdobeStock_299290543.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w" },
            { name: "Orange", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FC4a2s4XcKtZlFv5-VhXxlSWax5tdQGjZg&s" },
            { name: "Strawberry", img: "https://static.vecteezy.com/system/resources/thumbnails/053/117/131/small/strawberry-fruit-smoothie-fresh-juice-png.png" },
            { name: "Mango", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrer7XLQ9V-QcKpW7XVRYVdSmxgUDvv2tIYA&s" },
            { name: "Grapes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDiFlL6g3mKU4V_miQRfSMwhDUoobtbKvuw&s" },
            { name: "Pineapple", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DA8gObYe3tUJKbZIjuIfq2AZJWr3_Qrlmg&s" },
            { name: "Watermelon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGGkkCSgN802KH3_irjwdYpIeFC6jDUtFMA&s" },
            { name: "Papaya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D1wFk7NZ7ie2oGd0RcbTqnVW3aBNYngcUg&s" },
            { name: "Kiwi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yEaf7z8MLpXApCHpYVlEIMJDX8_5EGa27A&s" },
            { name: "Pomegranate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsrzyONi_FoxCsbOQspkW7MUK4EieXuYpmg&s" },
            { name: "Guava", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgLTWYcOvBRze3rDEVS-jwzb3JGNAbW-I9A&s" },
            { name: "Blueberry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnlQVo-tVqFJwcwsjZP5cJFn3BmSHy0F9UQ&s" },
            { name: "Cherry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOcR_cVsKkTtpZnLfOQeQ7cln70gFf71a5A&s" },
          
          ].map((item, i) => (
            <Box key={i} sx={{ minWidth: "120px", textAlign: "center" }}>
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 1,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <Typography fontSize="14px">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/*  CTA BUTTON */}
      <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/groceries")}
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: "30px",
            fontWeight: 600,
            fontSize: "16px",
            background: "linear-gradient(90deg, #2e7d32, #66bb6a)",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #1b5e20, #43a047)",
            },
          }}
        >
          Shop Groceries Now
        </Button>
      </Box>

    </Box>
  );
}

export default GroceryHero;