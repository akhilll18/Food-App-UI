// PrivacyPolicy.jsx
import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ bgcolor: "#f9fbf9", py: 6 }}>
      <Container maxWidth="md">
        
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Last updated: March 2026
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Section 1 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          We collect information that you provide directly to us when you use our
          food and grocery delivery services. This includes your name, email
          address, phone number, delivery address, and order details.
        </Typography>
        <Typography paragraph>
          We may also collect device information, usage data, and location data
          to improve our services.
        </Typography>

        {/* Section 2 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>
          Your information is used to process orders, provide delivery services,
          improve user experience, and communicate updates, offers, and support.
        </Typography>

        {/* Section 3 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Sharing of Information
        </Typography>
        <Typography paragraph>
          We may share your information with delivery partners and payment
          providers to complete your orders. We may also disclose information if
          required to comply with legal obligations.
        </Typography>

        {/* Section 4 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Data Security
        </Typography>
        <Typography paragraph>
          We implement appropriate security measures to protect your personal
          data. However, no method of transmission over the internet is 100%
          secure.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography paragraph>
          You have the right to access, update, or delete your personal
          information. You can also opt out of marketing communications.
        </Typography>

        {/* Section 6 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Changes to This Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated date.
        </Typography>

        {/* Section 7 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy, please contact us
          at support@yourapp.com.
        </Typography>

        <Divider sx={{ mt: 4, mb: 2 }} />

        {/* Footer */}
        <Typography variant="body2" color="text.secondary" align="center">
          © 2026 Your App Name. All rights reserved.
        </Typography>

      </Container>
    </Box>
  );
};

export default PrivacyPolicy;