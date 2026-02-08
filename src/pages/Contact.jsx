import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        {/* Hero */}
        <div className="contact-hero">
          <h1>Get in Touch with Brandify</h1>
          <p>We’d love to hear from you! Send us a message or visit our campus.</p>
        </div>

        {/* Contact Container */}
        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" />
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
          
            <div className="address-box">
              <h4>Visit Our Campus</h4>
              <p>123 Tahrir Street, Downtown, Cairo, Egypt</p>
            </div>

            {/* Social Links */}
            <h3 className="section-title">Social Links</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/login"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/login"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.twitter.com/login"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}