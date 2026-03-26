import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🥗',
      title: 'Fresh & Organic',
      description: '100% organic ingredients harvested daily for maximum nutrition'
    },
    {
      icon: '♻️',
      title: 'Eco-Friendly',
      description: 'Zero-waste packaging and carbon-neutral delivery options'
    },
    {
      icon: '🌟',
      title: 'Quality Guaranteed',
      description: 'Hand-picked ingredients with strict quality standards'
    }
  ];

  return (
    <div className="home">

     
      <section className="hero-section">
        <div className="container">
          <div className="hero-container">

            <div className="hero-content">
              <span className="hero-badge">FRESH & ORGANIC</span>

              <h1 className="hero-title">
                Eat Fresh,<br />
                Live Green
              </h1>

              <p className="hero-description">
                Discover the taste of nature with our sustainably sourced, 
                farm-to-table ingredients. Healthy eating made simple.
              </p>

              <div className="hero-buttons">
                <button 
                  className="btn-primary-large" 
                  onClick={() => navigate('/about')}
                >
                  Explore Now
                </button>

                <button 
                  className="btn-outline-large"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img 
                src="https://cdni.iconscout.com/illustration/premium/thumb/home-delivery-illustration-svg-download-png-4438623.png"
                alt="Food Delivery"
              />
            </div>

          </div>
        </div>
      </section>

     
      <section className="features-section">
        <div className="container">

          <div className="section-header">
            <h2 className="section-title">Why Choose Home Food</h2>
            <p className="section-subtitle">
              We're committed to providing fresh and healthy food options
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="how-image-wrapper">
              <h1> How It Works</h1>

            <img 
              src="/roadmap.png"
              alt="How it works"
              className="how-image"
            />
          </div>
          

        </div>
      </section>

     
      
          

          
        
   

    </div>
  );
};

export default Home;