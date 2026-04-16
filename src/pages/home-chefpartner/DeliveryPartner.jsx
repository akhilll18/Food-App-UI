import React from "react";
import { Box, Typography, Button, Container, Grid, Card } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const cardStyle = {
  textAlign: "center",
  p: 3,
  borderRadius: 3,
  height: "100%",
  backgroundColor: "#f6f9f4",
  transition: "transform 0.3s",
  "&:hover": { transform: "translateY(-5px)" },
};


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .MuiAccordionSummary-expandIconWrapper.Mui-expanded`]: {
    transform: 'rotate(90deg)',
  },
  [`& .MuiAccordionSummary-content`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const DeliveryPartner = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // FAQ section
  const faqs = [
    {
      id: 'panel1',
      question: 'What documents do I need to join?',
      answer: 'Aadhar card, PAN card, driving license, and bank account details. That\'s it!'
    },
    {
      id: 'panel2',
      question: 'Do I need my own vehicle?',
      answer: 'Yes, you can deliver with a bicycle, scooter, motorcycle, or car. All vehicles are welcome.'
    },
    {
      id: 'panel3',
      question: 'Is there any registration fee?',
      answer: 'No registration fee. Zero cost to start earning.'
    },
    {
      id: 'panel4',
      question: 'How much can I earn?',
      answer: 'Average partners earn ₹20,000-₹30,000 monthly. Top performers earn ₹50,000+ with bonuses.'
    },
    {
      id: 'panel5',
      question: 'When do I get paid?',
      answer: 'Weekly payouts directly to your bank account every Friday.'
    },
    {
      id: 'panel6',
      question: 'Can I choose my delivery area?',
      answer: 'Yes, you can select your preferred delivery zones within your city.'
    },
    {
      id: 'panel7',
      question: 'Is there any training provided?',
      answer: 'Yes, we provide online training videos and in-person sessions to help you get started.'
    }
  ];

  return (
    <Box>
     
      <Box sx={{ backgroundColor: "#fff", py: 1 }}>
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

   
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box sx={{ textAlign: "center", mb: 2, mt: 1 }}>
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

     
        <Grid container spacing={2} sx={{ mb: 2 }}>
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

      
        <Box sx={{ position: "relative", width: "100%", mb: 1, borderRadius: "15px", overflow: "hidden" }}>
          <img
            src="/deliveryimg2.png"
            alt="Delivery Partner"
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              display: "block",
            }}
          />
          
         
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
          
          
          <Box
            sx={{
              position: "absolute",
              bottom: 5,
              left: 0,
              right: 0,
              textAlign: "center",
              px: 2,
              zIndex: 2,
            }}
          >
           <Box sx={{ textAlign: "center" }}>
  <Typography
    variant="h4"
    sx={{
      color: "#ffffff",
      fontWeight: 700,
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
    }}
  >
    Drive Your Success Story With Us
  </Typography>
  
  <Typography
    sx={{
      color: "#ffffff",
      fontSize: "1.1rem",
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
      lineHeight: 2,
      mb: 2,
    }}
  >
    ✓ Competitive Earnings<br />
    ✓ Weekly Payments<br />
    ✓ 24/7 Support
  </Typography>
  
  <Typography
    variant="h6"
    sx={{
      color: "#f7b32b",
      fontWeight: 600,
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    }}
  >
    Be Your Own Boss & Earn on Your Terms
  </Typography>
</Box>
          </Box>
        </Box>
      </Container>

      
      <Box sx={{ backgroundColor: "#e8f5e9", py: 2}}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 1}}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 2, color: "#2c3e2f" }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "#4a5568",
                maxWidth: 700,
                mx: "auto",
                mb: 2
              }}
            >
              Got questions? We've got answers. Here's everything you need to know about becoming a delivery partner.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            {faqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                sx={{
                  backgroundColor: "#ffffff",
                  mb: 2,
                  borderRadius: "8px",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary aria-controls={`${faq.id}d-content`} id={`${faq.id}d-header`}>
                  <Typography component="span" sx={{ fontWeight: 600, color: "#2c3e2f" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#4a5568" }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f6d391",
          py: 6,
          px: 4,
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#000000" }}>
                Ready to Start Your Journey?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: "#000000" }}>
                Join 50,000+ delivery partners who are earning with us every day
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#f7b32b",
                  "&:hover": { bgcolor: "#f59e0b" },
                  borderRadius: "10px",
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#2c3e2f",
                }}
              >
                Download Partner App
              </Button>
              <Typography variant="body2" sx={{ mt: 3, color: "#000000" }}>
                Available on Google Play Store & iOS App Store
              </Typography>
            </Grid>

           
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 12,
                }}
              >
                <img
                  src="https://cdn.dribbble.com/users/2067022/screenshots/4186739/______.gif"
                  alt="Delivery Partner Animation"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
    </Box>
  );
};

export default DeliveryPartner;