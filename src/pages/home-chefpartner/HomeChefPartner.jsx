import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Container,
} from "@mui/material";


const HomeChefPartner = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Safety & Hygiene",
      description: "Maintain High Standards. Cook with confidence.  We provide guidelines and support to help you meet food safety best practices."
    },
    {
      icon: "🤝",
      title: "Support & Protection",
      description: "Dedicated Support & Insurance. You're not alone. Our partner support team is here to help, and you're covered by our liability protection program."
    },
    {
      icon: "💵",
      title: "Transparent Earnings",
      description: "Keep What You Earn. We believe in fair pay. You set your prices, and we have a simple, transparent commission structure. No hidden fees."
    },
    {
      icon: "📸",
      title: "Zero Upfront Costs",
      description: "Start for Free. No listing fees, no subscription charges, no hidden setup costs. You only pay a small commission when you earn—so you risk nothing to get started."
    },
    {
      icon: "⏱️",
      title: "Easy Onboarding",
      description: "Quick & Simple Setup. Get verified and start listing your dishes in days, not weeks. Our streamlined process gets you cooking faster."
    },
    {
      icon: "📱",
      title: "User-Friendly Dashboard",
      description: "Manage Everything in One Place. Track orders, update your menu, view earnings, and communicate with customers—all from our easy-to-use partner app."
    },
    {
      icon: "🏆",
      title: "Build Your Brand",
      description: "Grow Your Reputation. Collect customer reviews, build a loyal following, and establish yourself as a go-to home chef in your neighborhood."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Know Your Business. Access insights on your most popular dishes, peak order times, and customer preferences to optimize your menu and maximize earnings."
    },
    {
      icon: "🚚",
      title: "No Delivery Hassle",
      description: "Focus on Cooking. We handle the logistics—customers pick up or we connect you with delivery partners. You just focus on what you do best: creating amazing food."
    },
   
    
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, px: 2 }}>
      
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          alignItems: "center",  
          mb: 4,
          color: "#2c3e2f",
          borderBottom: "3px solid #f7b32b",
          display: "inline-block",
          width: "auto",
          marginLeft: "30%",
          px: 2,
        }}
      >
        Homechef Partner
      </Typography>

      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
          mb: 8,
          flexWrap: { xs: "wrap", md: "nowrap" }, 
        }}
      >
     
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Box
            component="img"
            src="/homechefs.png"
            alt="Home Chef"
            sx={{
              width: "100%",
              maxWidth: 600,
              height: "400px",
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Box>

     
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#4a5568",
              mb: 2,
              textAlign: "justify",
            }}
          >
            Whether you're a home-grown chef or a passionate cook, you can now
            turn your kitchen into a business. Men and women everywhere are
            earning by simply cooking their favourite home-cooked meals and
            listing them directly in our app. Just share your signature dishes,
            and whenever a neighbor places an order, you earn money for your
            talent. With flexible hours and weekly bank payouts, it's the
            perfect way to get paid for doing what you already love at home.
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "green",
              "&:hover": { bgcolor: "#f59e0b" },
              borderRadius: "10px",
              px: 4,
              py: 1,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              width: "fit-content",
              marginLeft: "35%",
            }}
          >
            Register here
          </Button>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mb: 6, mt: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 2, color: "#2c3e2f" }}
        >
          Become a Home Chef Partner
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", color: "#666", maxWidth: 700, mx: "auto" }}
        >
          Share your cooking passion with food lovers. Turn your home kitchen
          into a business model and earn money doing what you love.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography variant="h2">👩‍🍳</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
              Showcase Your Talent
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Share your unique recipes with food lovers
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography variant="h2">⏰</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
              Flexible Schedule
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Cook when you want, set your own availability
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography variant="h2">💰</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
              Earn Extra Income
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Turn your cooking skills into a profitable business
            </Typography>
          </Card>
        </Grid>
      </Grid>

     
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}
        >
          How It Works
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
            textAlign: "center",
            mt: 4,
          }}
        >
          <Box sx={{ flex: "1 1 180px", minWidth: 150 }}>
            <Typography variant="h3" sx={{ color: "#4caf50", fontWeight: 700 }}>
              1
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Sign Up
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Register as a home chef partner
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 180px", minWidth: 150 }}>
            <Typography variant="h3" sx={{ color: "#4caf50", fontWeight: 700 }}>
              2
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Get Verified
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Complete verification process
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 180px", minWidth: 150 }}>
            <Typography variant="h3" sx={{ color: "#4caf50", fontWeight: 700 }}>
              3
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              List Your Dishes
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Upload your menu and pricing
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 180px", minWidth: 150 }}>
            <Typography variant="h3" sx={{ color: "#4caf50", fontWeight: 700 }}>
              4
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Start Cooking
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Receive orders and start earning
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 180px", minWidth: 150 }}>
            <Typography variant="h3" sx={{ color: "#4caf50", fontWeight: 700 }}>
              5
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              List in our app
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Get payments directly to your bank account
            </Typography>
          </Box>
        </Box>
      </Box>
 <Box sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 2,
          color: '#2c3e2f',
        }}
      >
        Everything You Need to Succeed
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: '1.1rem',
          color: '#666',
          textAlign: 'center',
          mb: 6,
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        We provide all the tools, support, and resources to help you grow your home chef business
      </Typography>

    
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: '3rem',
                  mb: 2,
                }}
              >
                {feature.icon}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: '#2c3e2f',
                  fontSize: '1.1rem',
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
   

     
          

    </Container>
  );
};

export default HomeChefPartner;