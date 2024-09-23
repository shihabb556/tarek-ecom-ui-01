import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Grocery <ShoppingBag /></h3>
          <p>Feel Free Follow Us On Our Social Media Handles</p>
          <div className="share">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="#" className="links"><Phone /> +880 1790798183</a>
          <a href="#" className="links"><Mail /> tarekhassan@gmail.com</a>
          <a href="#" className="links"><MapPin /> Mirpur-6, Dhaka</a>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <a href="#" className="links">Home</a>
          <a href="#" className="links">Features</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
