import React from 'react';
import { CheckCircle, Truck, CreditCard, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section className="features">
      <h2 className="section-title">Our Features</h2>
      <div className="features-container">
        <div className="feature-box">
          <CheckCircle className="feature-icon" />
          <h3>Quality Products</h3>
          <p>We provide high-quality groceries sourced from trusted suppliers.</p>
        </div>

        <div className="feature-box">
          <Truck className="feature-icon" />
          <h3>Fast Delivery</h3>
          <p>Get your groceries delivered to your door quickly and efficiently.</p>
        </div>

        <div className="feature-box">
          <CreditCard className="feature-icon" />
          <h3>Easy Payments</h3>
          <p>We accept a wide range of payment methods for a hassle-free checkout.</p>
        </div>

        <div className="feature-box">
          <Shield className="feature-icon" />
          <h3>Secure Shopping</h3>
          <p>Your personal and payment information is always protected with us.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
