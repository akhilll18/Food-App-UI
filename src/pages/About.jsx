import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Container,
  Avatar,
  Chip,
  Modal,
  IconButton,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const values = [
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
      description:
        "We partner with local farmers who use sustainable practices to protect our planet for future generations.",
    },
    {
      icon: "✨",
      title: "Culinary Excellence",
      description:
        "Every ingredient is carefully selected to ensure the highest quality and nutritional value.",
    },
    {
      icon: "🤝",
      title: "Community First",
      description:
        "We believe in supporting local communities and creating meaningful connections through food.",
    },
    {
      icon: "💡",
      title: "Innovation & Creativity",
      description:
        "Constantly exploring new techniques and flavors to redefine modern dining.",
    },
  ];

  const teamMembers = [
    {
      name: "M.Praveen Reddy",
      role: "Executive Chef & Co-Founder",
      image: "",
      bio: "Jane has over 15 years of experience in Michelin-starred kitchens. Her passion for sustainable farm-to-table cuisine led her to co-found Foyer. She believes that great food starts with respect for ingredients and the people who grow them.",
      experience: "15+ years",
      specialty: "Farm-to-table cuisine",
    },
    {
      name: "Shivram",
      role: "Operations Director",
      image: "", 
      bio: "Darlene brings a decade of experience in restaurant management and logistics. She ensures every dish leaves the kitchen on time and meets our highest quality standards.",
      experience: "10+ years",
      specialty: "Operations & Logistics",
    },
    {
      name: " Akhil",
      role: "Head of Sustainability",
      image: "", 
      bio: "Darrell is passionate about reducing food waste and building relationships with local farms. He oversees our zero-waste kitchen initiative and compostable packaging program.",
      experience: "8+ years",
      specialty: "Sustainable practices",
    },
    {
      name: "Ram",
      role: "Creative Culinary Lead",
      image: "",
      bio: "Jenny is the creative force behind our seasonal menus. She loves experimenting with bold flavors and unexpected ingredient combinations that surprise and delight our guests.",
      experience: "12+ years",
      specialty: "Menu innovation",
    },
  ];

  const testimonials = [
    {
      name: "Sophia H.",
      role: "Food Critic",
      text: "The attention to detail and depth of flavor in every dish is extraordinary. Foyer has redefined what farm-to-table dining means in this city.",
    },
    {
      name: "Jidan D.",
      role: "Restaurant Owner",
      text: "Our office catering exceeded all expectations! The food was professional, flavorful, and incredibly fresh. They handled every challenge with grace and efficiency.",
    },
    {
      name: "Thomas G.",
      role: "Event Planner",
      text: "We have been fortunate to work with Foyer on several projects, and they have consistently delivered high-quality culinary experiences.",
    },
  ];

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
          py: { xs: 2 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              color: "#2c3e2b",
              mb: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            About FOYER
          </Typography>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    fontWeight: 600,
                    color: "#2c3e2b",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#4a5b3e", lineHeight: 1.65, mb: 2, mt: 2 }}
                >
                  Founded in 2021, Foyer began with a simple idea: delicious
                  food shouldn't come at the expense of our planet. We set out
                  to create a dining experience that nourishes both people and
                  the environment.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#4a5b3e", lineHeight: 1.65, mb: 2 }}
                >
                  Today, we're proud to partner with over 50 local organic
                  farms, use 100% compostable packaging, and maintain a
                  zero-waste kitchen. Every meal we serve is a step towards a
                  more sustainable future.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#4a5b3e", lineHeight: 1.65 }}
                >
                  Our commitment to quality and sustainability has earned us
                  recognition as a leader in the eco-food movement, and we're
                  just getting started.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://cdn.prod.website-files.com/5e0c29eceae07ed55982d194/61f48646e57fa12a7a3241b3_Slide%204.png"
                alt="Sustainable Farming"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ py: 6, bgcolor: "#fefaf5" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 600,
              color: "#2c3e2b",
              textAlign: "center",
              mb: 4,
              fontFamily: "Georgia, serif",
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    height: "100%",
                    border: "1px solid #f0e3d6",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 30px -12px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Typography variant="h2" sx={{ fontSize: "3rem", mb: 1 }}>
                    {value.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#2c3e2b", mb: 1 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#5a6e4a", lineHeight: 1.5 }}
                  >
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 6, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/our-mission.png"
                alt="Our Mission - Fresh ingredients"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  boxShadow: "none",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "#2c3e2b",
                    mb: 2,
                    fontFamily: "Georgia, serif",
                      textAlign: "center",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.05rem",
                    color: "#3b4a32",
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  To provide exceptional culinary experiences that exceed client
                  expectations through innovation, sustainability, and artistry.
                  We are committed to continuously improving and delivering
                  high-quality food that meets the highest standards.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{  bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  boxShadow: "none",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "#2c3e2b",
                    mb: 2,
                    fontFamily: "Georgia, serif",
                      textAlign: "center",
                   
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.05rem",
                    color: "#3b4a32",
                    lineHeight: 1.6,
                    mb: 2,
                    
                  }}
                >
                  
                  At Foyer, our vision is to redefine the future of dining
                  through innovation, sustainability, and culinary excellence.
                  We aim to create experiences that not only satisfy but inspire
                  — transforming the way people connect with food.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/our-vission.png"
                alt="Our Vision - Modern dining experience"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section - With PNG Images */}
      <Box sx={{ py: 6, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontWeight: 600,
                color: "#2c3e2b",
                mb: 2,
                fontFamily: "Georgia, serif",
              }}
            >
              Crafting Excellence as a Team
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#5a6e4a", maxWidth: 700, mx: "auto" }}
            >
              Click on any team member to learn more about them
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  onClick={() => handleOpenModal(member)}
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid #efe2d4",
                    bgcolor: "#fefaf5",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 25px -10px rgba(0,0,0,0.15)",
                      borderColor: "#c17a3a",
                    },
                  }}
                >
                  <Avatar
                    src={member.image}  
                    sx={{
                      width: 100,
                      height: 100,
                      mx: "auto",
                      mb: 2,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#2c3e2b", mb: 0.5 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#c17a3a", fontWeight: 500 }}
                  >
                    {member.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

  
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "relative",
              bgcolor: "#ffffff",
              borderRadius: 4,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              maxWidth: 750,
              width: "90%",
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "rgba(255,255,255,0.9)",
                zIndex: 10,
                "&:hover": { bgcolor: "#f0e3d6" },
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedMember && (
              <Grid container sx={{ minHeight: 250 }}>
                {/* Left Side - Image */}
                <Grid
                  size={{ xs: 12, sm: 4.5 }}
                  sx={{
                    background:
                      "linear-gradient(135deg, #c17a3a 0%, #a5622c 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                  }}
                >
                  <Avatar
                    src={selectedMember.image}  // Using PNG image URL
                    sx={{
                      width: 160,
                      height: 160,
                      border: "4px solid white",
                    }}
                  />
                </Grid>

                {/* Right Side - Content */}
                <Grid
                  size={{ xs: 12, sm: 7.5 }}
                  sx={{ p: 3, overflow: "auto" }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#2c3e2b",
                      mb: 0.5,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {selectedMember.name}
                  </Typography>

                  <Chip
                    label={selectedMember.role}
                    sx={{
                      bgcolor: "rgba(193, 122, 58, 0.1)",
                      color: "#c17a3a",
                      fontWeight: 600,
                      mb: 2,
                      fontSize: "0.75rem",
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{ color: "#4a5b3e", lineHeight: 1.6, mb: 2 }}
                  >
                    {selectedMember.bio}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: "#8b7a66" }}>
                        Experience
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: "#c17a3a" }}
                      >
                        {selectedMember.experience}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: "#8b7a66" }}>
                        Specialty
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: "#c17a3a" }}
                      >
                        {selectedMember.specialty}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* Testimonials Section */}
      <Box sx={{ py: 6, bgcolor: "#fff8f2" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontWeight: 600,
                color: "#2c3e2b",
                mb: 2,
                fontFamily: "Georgia, serif",
              }}
            >
              Why Our Customers Love Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#5a6e4a", maxWidth: 700, mx: "auto" }}
            >
              Our clients trust us for our reliability, attention to detail, and
              dedication to delivering exceptional culinary experiences.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    height: "100%",
                    border: "1px solid #f0e2d4",
                    position: "relative",
                    bgcolor: "#ffffff",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "3rem",
                      color: "rgba(193, 122, 58, 0.2)",
                      fontFamily: "serif",
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    "
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      color: "#3b4a32",
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: "#2c3e2b" }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#8b7a66" }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;