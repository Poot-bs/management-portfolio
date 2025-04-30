import React from 'react';
import { motion } from 'framer-motion';
import '../styles/button.css';

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <motion.button
      className={`btn ${variant}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;