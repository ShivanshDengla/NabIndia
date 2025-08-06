import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '267e544b-44aa-4aa2-853b-a1aa728e9ad9',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: 'NAB India Contact Form'
        })
      });

      const data = await response.json();

      if (response.status === 200) {
        setSubmitStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setSubmitStatus({ submitting: false, submitted: false, error: error.message });
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }
  };

  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/Projects/center-of-blind.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="contact-container">
      <div className="contact-hero" style={heroStyle}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or support</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h3>Head Office</h3>
            <p>
              <span className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="text-content">
                NAB, 11-12 Khan Abdul Gaffar Khan Road,<br />
                Worli Sea Face,<br />
                Mumbai - 400030
              </span>
            </p>
          </div>

          <div className="info-section">
            <h3>Phone Numbers</h3>
            <div className="phone-numbers">
              <p>
                <span className="icon-wrapper">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span className="text-content">
                  <span className="phone-group">
                    <span className="phone-label">Mobile:</span>
                    <a href="tel:+919372766313">+91 9372766313</a> /
                    <a href="tel:+919372766320">+91 9372766320</a>
                  </span>
                </span>
              </p>
              <p>
                <span className="icon-wrapper">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="text-content">
                  <span className="phone-group">
                    <span className="phone-label">Landline:</span>
                    <a href="tel:02224932539">022-24932539</a> /
                    <a href="tel:02224935365">022-24935365</a> /
                    <a href="tel:02224935370">022-24935370</a>
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="info-section">
            <h3>Email</h3>
            <p>
              <span className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="text-content">
                <a href="mailto:administration@nabindia.info">administration@nabindia.info</a>
              </span>
            </p>
            <p>
              <span className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="text-content">
                <a href="mailto:hsg@nabindia.info">hsg@nabindia.info</a>
              </span>
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                disabled={submitStatus.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                disabled={submitStatus.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                disabled={submitStatus.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
                disabled={submitStatus.submitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={submitStatus.submitting}
            >
              {submitStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus.submitted && (
              <div className="form-status success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus.error && (
              <div className="form-status error">
                {submitStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="NAB India Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241420.96361345556!2d72.816354!3d19.010794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8a4f7ac623%3A0xa080fc742508b8b6!2sNational%20Association%20For%20The%20Blind%20India!5e0!3m2!1sen!2sus!4v1754055222740!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
