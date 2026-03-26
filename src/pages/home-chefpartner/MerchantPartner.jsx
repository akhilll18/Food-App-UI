import React from "react";

const MerchantPartner = () => {
  
  const containerStyle = { maxWidth: "1200px", margin: "0 auto" };
  const heroSection = { textAlign: "center", backgroundColor: "#f6f9f4", padding: "2rem" };
  const heroTitle = { fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", color: "#2c3e2f" };
  const heroSubtitle = { fontSize: "1.2rem", marginBottom: "2rem", color: "#4a4a4a" };
  
  const sectionTitle = { fontSize: "2rem", marginBottom: "2rem", color: "#2c3e2f", textAlign: "center" };
 

  
  const keyBenefitsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "2rem" };
  const keyBenefitCard = { backgroundColor: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", transition: "transform 0.3s", textAlign: "left" };
  
  const featuresGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "2rem" };
  const featureCard = { backgroundColor: "#f6f9f4", padding: "1.5rem", borderRadius: "12px", textAlign: "center", transition: "transform 0.3s" };
  
  
  
  const imageGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" };
  const imageCard = { backgroundColor: "#f6f9f4", padding: "1rem", borderRadius: "12px", textAlign: "center" };
  const merchantImage = { width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", backgroundColor: "#e0e0e0" };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      <section style={heroSection}>
        <div style={containerStyle}>
          <h1 style={heroTitle}>Become a Merchant Partner</h1>
          <p style={heroSubtitle}>
            Join our platform and take your store online. Get more orders, reach more customers, and increase your revenue — all with ease.
            As a food and grocery merchant partner, our app acts as a digital engine that brings your storefront directly to thousands of local customers. 
            By joining our platform, you transition from a local store to a 24/7, accessible digital brand.</p>
        </div>
      </section>

     


      <section style={{ padding: "4rem 2rem", backgroundColor: "#fafafa" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>🌟 Key Benefits for Merchants</h2>
          <div style={keyBenefitsGrid}>
            {[

              { icon: "💰", title: "Increased Revenue & Sales Volume", desc: "Access new customer segments, leading to higher order volumes and average order values, often 25% higher than in-store purchases." },
              { icon: "🚚", title: "Operational Efficiency", desc: "Outsource the complex logistics of delivery, allowing you to focus on product quality rather than driver management." },
              { icon: "📊", title: "Valuable Data Insights", desc: "Utilize analytics to understand customer preferences, buying trends, and peak demand times to optimize your inventory." },
     
            ].map((benefit, index) => (
              <div key={index} style={keyBenefitCard}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>{benefit.icon}</span>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#2c3e2f" }}>{benefit.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#4a4a4a", lineHeight: "1.5" }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section style={{ padding: "4rem 2rem" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>Manage Your Store Seamlessly</h2>
          <div style={imageGrid}>
            <div style={imageCard}>
              <img 
                src="/images/merchant-dashboard.png" 
                alt="Merchant Dashboard" 
                style={merchantImage}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Dashboard+Preview"; }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>Smart Dashboard</p>
            </div>
            <div style={imageCard}>
              <img 
                src="/images/order-management.png" 
                alt="Order Management" 
                style={merchantImage}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Order+Management"; }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>Real-Time Orders</p>
            </div>
            <div style={imageCard}>
              <img 
                src="/images/analytics.png" 
                alt="Analytics" 
                style={merchantImage}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Analytics+Insights"; }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>Analytics & Insights</p>
            </div>
          </div>
        </div>
      </section>

      
      <section style={{ padding: "4rem 2rem", backgroundColor: "#f6f9f4" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>"🤝 Uses for Merchants"</h2>
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

     

     

     

     
    </div>
  );
};

export default MerchantPartner;