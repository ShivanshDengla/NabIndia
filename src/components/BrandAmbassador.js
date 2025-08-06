import React from 'react';
import './BrandAmbassador.css';

const BrandAmbassador = () => {
  return (
    <section className="brand-ambassador" aria-labelledby="brand-ambassador-heading">
      <div className="brand-ambassador-image">
        <img src="/images/john_abraham.jpeg" alt="John Abraham with Dr. Vimal Kumar Dengla" />
      </div>
      <div className="brand-ambassador-content">
        <h2 id="brand-ambassador-heading">Our Brand Ambassador</h2>
        <p>
          John Abraham, a renowned actor and philanthropist, is the brand ambassador for NAB India.
          He has been a constant support to our cause, leveraging his brand value to bring
          awareness and help us reach a wider audience. His commitment has been invaluable
          in our mission to empower the visually impaired.
        </p>
      </div>
    </section>
  );
}

export default BrandAmbassador;
