import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        
      </div>
      <div className="pricing-cards">
      <div className="pricing-card">
        <img src="img/portfolio/testimonial1.png" alt="Features" className="features-image" />
      </div>

      <div className="pricing-card">
      <img src="img/portfolio/testimonial2.png" alt="Features" className="features-image" />
      </div>

      <div className="pricing-card">
      <img src="img/portfolio/testimonial3.png" alt="Features" className="features-image" />
      </div>
      <div className="pricing-card">
      <img src="img/portfolio/testimonial4.png" alt="Features" className="features-image" />
      </div>
    </div>
    </div>
  );
};
