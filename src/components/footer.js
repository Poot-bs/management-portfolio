import React from 'react';
import { motion } from 'framer-motion';
import '../styles/footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="footer"
    >
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Lamis's Portfolio. All rights reserved.</p>
        <p>Designed with ❤️ and ☕</p>
      </div>
    </motion.footer>
  );
};

export default Footer;