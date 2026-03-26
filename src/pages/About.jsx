import React from 'react';

const About = () => {
  const values = [
    {
      title: '🌱 Sustainability',
      description: 'We partner with local farmers who use sustainable practices to protect our planet for future generations.'
    },
    {
      title: '✨ Quality',
      description: 'Every ingredient is carefully selected to ensure the highest quality and nutritional value.'
    },
    {
      title: '🤝 Community',
      description: 'We believe in supporting local communities and creating meaningful connections through food.'
    },
   
  ];

  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">About FOYER</h1>
          <p className="about-subtitle">
            Our mission is to make healthy, and delever quality food
          </p>
        </div>
      </div>

      <div className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2024, EcoFood began with a simple idea: delicious food 
                shouldn't come at the expense of our planet. We set out to create 
                a dining experience that nourishes both people and the environment.
              </p>
              <p>
                Today, we're proud to partner with over 50 local organic farms, 
                use 100% compostable packaging, and maintain a zero-waste kitchen. 
                Every meal we serve is a step towards a more sustainable future.
              </p>
              <p>
                Our commitment to quality and sustainability has earned us recognition 
                as a leader in the eco-food movement, and we're just getting started.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://cdn.prod.website-files.com/5e0c29eceae07ed55982d194/61f48646e57fa12a7a3241b3_Slide%204.png" 
                alt="Sustainable Farming"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-values">
        <div className="container">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>   
    </div>
  );
};

export default About;