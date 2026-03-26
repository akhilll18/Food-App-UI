import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function ContactUs() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 8 }}>

     
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          mb: 10,
          
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#2c3e2f',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Get In Touch With Us
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6 }}
          >
            We'd love to hear from you! Whether you have a question about our services,
            need assistance, or just want to share your thoughts, our team is here to help.
            Reach out anytime.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/Contact%20Us/DO%20NOT%20USE-%202025%20Contact%20Us%20images%20%5Bcontact%20Teenie%20Rose%20for%20usage%5D/contact-us-illustration-crop.webp?width=1352&height=966&name=contact-us-illustration-crop.webp"
            alt="Contact Us"
            style={{
              width: '100%',
              borderRadius: '16px',
              height: 'auto',
              objectFit: 'cover',
              
            }}
          />
        </Box>
      </Box>

    
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >

       
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.437211628847!2d78.36212117369062!3d17.438775801325626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ee44e40b52cf5e7%3A0xcb5f6c9932fd733e!2sONAS%20Consulting%20Services!5e0!3m2!1sen!2sus!4v1759363285471!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Office Location"
            ></iframe>

            <Box sx={{ p: 3, py: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Our Office
              </Typography>

              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                Vasavi Sky City, 8th Floor, Quick Start-CoWorking, Gachibowli,
                Hyderabad, Telangana 500032
              </Typography>

              <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                <strong>Email:</strong> sales@onasglobal.com
              </Typography>

              <Typography variant="body2" sx={{ color: '#666' }}>
                <strong>Phone:</strong> +91-984 800 4777
              </Typography>
            </Box>
          </Box>
        </Box>

       
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}
            >
              Send us a Message
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <TextField label="First Name" fullWidth />
              <TextField label="Last Name" fullWidth />
            </Box>

            <TextField
              label="Email Address"
              type="email"
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="How Can We Help You?"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 3 }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': { backgroundColor: '#45a049' },
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default ContactUs;