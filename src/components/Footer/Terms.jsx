import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import "@fontsource/poppins"; // Import Poppins font

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5, fontFamily: "'Poppins', sans-serif" }}>
      <Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 2 }}> {/* Removed boxShadow */}
        <Typography variant="h4" align="center" gutterBottom>
          Terms and Conditions – Foyer
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
          Effective Date: [Insert Date]
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to <strong>Foyer</strong>, your platform for ordering food, groceries, and home essentials. By accessing or using our app, website, or services, you agree to these Terms and Conditions.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography paragraph>
          By using Foyer, you agree to be bound by these Terms. If you do not agree, please do not use the app.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Eligibility
        </Typography>
        <Typography paragraph>
          You must be at least 18 years old (or of legal age in your region) to use Foyer.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Account Registration
        </Typography>
        <ul style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>You may need to create an account to place orders.</li>
          <li>Keep your login details confidential.</li>
          <li>You are responsible for all activity under your account.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          4. Use of the App
        </Typography>
        <ul style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>Use the app only for lawful purposes.</li>
          <li>Do not interfere with app operations or access it in unauthorized ways.</li>
          <li>Comply with local laws regarding online purchases and deliveries.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          5. Orders, Payments, and Delivery
        </Typography>
        <ul style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>All orders for food, groceries, and home essentials must be paid through the app.</li>
          <li>Prices, availability, and delivery charges may change without notice.</li>
          <li>Delivery times are estimates and may vary due to demand or other conditions.</li>
          <li>Refunds or cancellations are handled according to our <Link href="#">Refund Policy</Link>.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          6. Product Information
        </Typography>
        <Typography paragraph>
          We strive for accurate product details, but items may occasionally be out of stock or substituted with similar products.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. User Responsibilities
        </Typography>
        <ul style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>Ensure your delivery address is correct and accessible.</li>
          <li>Accept deliveries promptly or as instructed in the app.</li>
          <li>Report issues with orders within [Insert timeframe, e.g., 24 hours].</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          8. Intellectual Property
        </Typography>
        <Typography paragraph>
          All content, logos, and software in Foyer are owned by us or our partners. Copying, modifying, or distributing app content without permission is prohibited.
        </Typography>

        <Typography variant="h6" gutterBottom>
          9. User-Generated Content
        </Typography>
        <Typography paragraph>
          Any reviews, comments, or images you share must be legal and not infringe third-party rights. We may remove content that violates these Terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          10. Privacy
        </Typography>
        <Typography paragraph>
          Your use of Foyer is also governed by our <Link href="#">Privacy Policy</Link>, explaining how we handle your personal data.
        </Typography>

        <Typography variant="h6" gutterBottom>
          11. Limitation of Liability
        </Typography>
        <Typography paragraph>
          Foyer is not responsible for indirect or unforeseen losses. Service interruptions, food quality outside of our control, or delivery delays are not guaranteed.
        </Typography>

        <Typography variant="h6" gutterBottom>
          12. Termination
        </Typography>
        <Typography paragraph>
          We may suspend or terminate your account for violations of these Terms or other reasons at our discretion.
        </Typography>

        <Typography variant="h6" gutterBottom>
          13. Governing Law
        </Typography>
        <Typography paragraph>
          These Terms are governed by the laws of [Insert jurisdiction]. Disputes will be resolved in the courts of [Insert city/state].
        </Typography>

        <Typography variant="h6" gutterBottom>
          14. Changes to Terms
        </Typography>
        <Typography paragraph>
          We may update these Terms at any time. Updates will be posted in the app, and continued use constitutes acceptance.
        </Typography>

        <Typography variant="h6" gutterBottom>
          15. Contact Us
        </Typography>
        <Typography paragraph>
          For questions about these Terms, contact us at:
        </Typography>
        <ul style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>Email: support@[yourapp].com</li>
          <li>Phone: [Insert phone number]</li>
        </ul>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;   