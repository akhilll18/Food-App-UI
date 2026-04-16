import React from "react";

const MerchantPartner = () => {
  
  const containerStyle = { maxWidth: "1200px", margin: "0 auto" };
  
  // Updated Hero Section - Full width image background with overlay content
  const heroSection = {
    position: "relative",
    width: "100%",
    minHeight: "550px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
  };
  
  const heroBackgroundImage = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  };
  
  const overlayContentBox = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(37, 37, 37, 0.55)", 
    padding: "2.5rem",
    borderRadius: "20px",
    maxWidth: "750px",
    margin: "0 auto",
    backdropFilter: "blur(3px)",
  };
  
  const heroTitle = { 
    fontSize: "2.5rem", 
    fontWeight: 700, 
    marginBottom: "1rem", 
    color: "#ffffff" 
  };
  
  const heroSubtitle = { 
    fontSize: "1.1rem", 
    marginBottom: "1.5rem", 
    color: "#ffffff",
    lineHeight: 1.6,
    opacity: 0.95
  };
  
  const sectionTitle = { fontSize: "2rem", marginBottom: "2rem", color: "#2c3e2f", textAlign: "center" };
  
  const keyBenefitsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "2rem" };
  const keyBenefitCard = { backgroundColor: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", transition: "transform 0.3s", textAlign: "left" };
  
  const featuresGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "2rem" };
  const featureCard = { backgroundColor: "#f6f9f4", padding: "1.5rem", borderRadius: "12px", textAlign: "center", transition: "transform 0.3s" };
  
  const imageGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" };
  const imageCard = { backgroundColor: "#f6f9f4", padding: "1rem", borderRadius: "12px", textAlign: "center" };
  const merchantImage = { width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", backgroundColor: "#e0e0e0" };
  
  // Styles for image overlay section
  const overlayImageSection = { position: "relative", width: "100%", borderRadius: "24px", overflow: "hidden", marginBottom: "4rem" };
  const gradientOverlay = { position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)" };
  const overlayContent = { position: "absolute", bottom: 40, left: 0, right: 0, textAlign: "center", px: 2, zIndex: 2 };
  
  // Styles for document section
  const documentsSection = { backgroundColor: "#fafafa", padding: "4rem 2rem" };
  const documentsCard = { backgroundColor: "#fff", padding: "2rem", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" };
  const documentsList = { listStyle: "none", padding: 0, marginTop: "1rem" };
  const documentsItem = { padding: "0.75rem 0", borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", gap: "0.75rem" };
  const ctaButton = { backgroundColor: "#f7b32b", color: "#2c3e2f", border: "none", padding: "1rem 2rem", fontSize: "1rem", fontWeight: 600, borderRadius: "10px", cursor: "pointer", marginTop: "1.5rem", transition: "transform 0.3s" };
  
  // Restaurant benefits data
  const restaurantBenefits = [
    { icon: "👥", title: "Attract New Customers", desc: "Reach millions of people ordering on our platform. Get discovered by customers who are actively looking for restaurants like yours." },
    { icon: "🚚", title: "Doorstep Delivery Convenience", desc: "Easily get your orders delivered through our trained delivery partners. No need to manage your own delivery fleet." },
    { icon: "📈", title: "Boost Your Revenue", desc: "Increase your sales by up to 40% with access to our large customer base. Get more orders during peak hours and weekends." },
    { icon: "⭐", title: "Build Your Brand", desc: "Showcase your restaurant with professional photos, menu highlights, and customer reviews that help build trust and loyalty." },
    { icon: "📊", title: "Data-Driven Insights", desc: "Access detailed analytics about customer preferences, popular dishes, and ordering patterns to optimize your menu." },
    { icon: "🎯", title: "Targeted Promotions", desc: "Run customized offers and discounts to attract specific customer segments and increase repeat orders." }
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* First Section - Hero with Image Background and Overlay Content */}
      <section style={heroSection}>
        {/* HD Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Restaurant Partnership"
          style={heroBackgroundImage}
        />
        
  
        <div style={overlayContentBox}>
          <h1 style={heroTitle}>Become a Merchant Partner with Us</h1>
          <p style={heroSubtitle}>
            Join our platform and take your store online. Get more orders, reach more customers, 
            and increase your revenue — all with ease. As a food and grocery merchant partner, 
            our app acts as a digital engine that brings your storefront directly to thousands 
            of local customers. By joining our platform, you transition from a local store to 
            a 24/7, accessible digital brand.
          </p>
        
        </div>
      </section>

      {/* Why Should You Partner With Us Section */}
      <section style={{padding: "4rem 2rem", backgroundColor: "#fff" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>🌟 Why Should You Partner With Us?</h2>
          <div style={keyBenefitsGrid}>
            {restaurantBenefits.map((benefit, index) => (
              <div key={index} style={keyBenefitCard}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>{benefit.icon}</span>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#2c3e2f" }}>{benefit.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#4a4a4a", lineHeight: "1.5" }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grow Your Business Section with Overlay */}
      <div style={{ padding: "0 2rem", marginBottom: "4rem" }}>
        <div style={containerStyle}>
          <div style={overlayImageSection}>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Partner Benefits"
              style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }}
            />
            
            <div style={gradientOverlay} />
         
            <div style={overlayContent}>
              <h2 style={{ fontSize: "2rem", color: "#ffffff", fontWeight: 700, marginBottom: "0.5rem", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                Grow Your Business With Us
              </h2>
              <div style={{ marginTop: "1rem" }}>
                <p style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "0.5rem", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                  • 0% Commission for First Month
                </p>
                <p style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "0.5rem", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                  • Free Delivery Partner Support
                </p>
                <p style={{ color: "#ffffff", fontSize: "1rem", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                  • 24/7 Merchant Support
                </p>
              </div>
              <button style={{ ...ctaButton, marginTop: "1.5rem", backgroundColor: "#f7b32b", color: "#2c3e2f" }}>
                Register Your Restaurant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <section style={documentsSection}>
        <div style={containerStyle}>
          <div style={documentsCard}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#2c3e2f", textAlign: "center" }}>
              Get Started: It Only Takes 10 Minutes
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "2rem" }}>
              Please keep these documents and details ready for a smooth sign-up
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between" }}>
              <div style={{ flex: 1 }}>
                <ul style={documentsList}>
                  <li style={documentsItem}>
                    <span style={{ fontSize: "1.2rem" }}>✓</span>
                    <span><strong>PAN card</strong> - Mandatory for all merchants</span>
                  </li>
                  <li style={documentsItem}>
                    <span style={{ fontSize: "1.2rem" }}>✓</span>
                    <span><strong>GST number</strong> - If applicable for your business</span>
                  </li>
                  <li style={documentsItem}>
                    <span style={{ fontSize: "1.2rem" }}>✓</span>
                    <span><strong>FSSAI license</strong> - Food safety compliance</span>
                  </li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <ul style={documentsList}>
                  <li style={documentsItem}>
                    <span style={{ fontSize: "1.2rem" }}>✓</span>
                    <span><strong>Menu and food images</strong> - High quality photos of your dishes</span>
                  </li>
                  <li style={documentsItem}>
                    <span style={{ fontSize: "1.2rem" }}>✓</span>
                    <span><strong>Bank account details</strong> - For weekly payouts</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                Don't have a FSSAI license? <a href="#" style={{ color: "#f7b32b", textDecoration: "none", fontWeight: 600 }}>Apply here.</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manage Your Store Section */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>Manage Your Store Seamlessly</h2>
          <div style={imageGrid}>
            <div style={imageCard}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Merchant Dashboard" 
                style={merchantImage}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Dashboard+Preview"; }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>Smart Dashboard</p>
            </div>
            <div style={imageCard}>
              <img 
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Order Management" 
                style={merchantImage}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Order+Management"; }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>Real-Time Orders</p>
            </div>
            <div style={imageCard}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Analytics" 
                style={merchantImage}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Analytics+Insights"; }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>Analytics & Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Uses for Merchants Section */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#f6f9f4" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>🤝 Uses for Merchants</h2>
          <div style={featuresGrid}>
            {[
              { icon: "📦", title: "Digital Inventory Management", desc: "Instantly update product availability, prices, and stock levels through a user-friendly admin panel." },
              { icon: "📍", title: "Real-Time Order Tracking", desc: "Manage incoming orders and monitor their status in real-time, from preparation to final delivery." },
              { icon: "💳", title: "Secure & Fast Payments", desc: "Receive automated, secure online payments for all orders, including UPI, wallets, and card payments." },
              { icon: "⭐", title: "Direct Customer Feedback", desc: "Access customer reviews and ratings to improve your services and products." },
              { icon: "📈", title: "More Revenue", desc: "Earn extra income by reaching new customers and boosting your weekly sales." },
              { icon: "🛒", title: "More Customers", desc: "Get access to a growing user base of loyal shoppers looking for groceries, essentials, and more." },
            ].map((feature, index) => (
              <div key={index} style={featureCard}>
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>{feature.icon}</span>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#2c3e2f" }}>{feature.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#4a4a4a", lineHeight: "1.5" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section style={{ backgroundColor: "#ffd3b4", padding: "4rem 2rem", width: "100%" }}>
        <div style={containerStyle}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: "#000000" }}>
                Ready to Take Your Business Online?
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "#000000", lineHeight: 1.5 }}>
                Join thousands of successful merchants who are growing their business with us
              </p>
              <button
                style={{
                  backgroundColor: "#f7b32b",
                  border: "none",
                  padding: "0.9rem 2.5rem",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: "10px",
                  cursor: "pointer",
                  color: "#2c3e2f",
                  transition: "transform 0.3s",
                  marginBottom: "1.5rem"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Download Merchant Partner App
              </button>
              <p style={{ fontSize: "0.9rem", color: "#000000" }}>
                Available on Google Play Store & iOS App Store
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="/Merchantapp.png"
                alt="Merchant Partner App Animation"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "300px",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MerchantPartner;