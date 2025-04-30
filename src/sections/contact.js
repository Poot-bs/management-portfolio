import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Button from '../components/button';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info">
            <p>
              I'm always open to discussing new opportunities, collaborations, or just chatting 
              about management strategies and creative ideas.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/lamis-essabay-bb2b36359/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/lamisss-s" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="mailto:lamisou06@hotmail.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>
          <form 
            className="contact-form"
            action="https://formspree.io/f/xdkgaldk" 
            method="POST"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="_replyto" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;