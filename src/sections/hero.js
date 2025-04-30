import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../components/button';
import AnimatedSection from '../components/animatedsection';
import TextReveal from '../components/textreveal';
import '../styles/hero.css';
import heroImage from '../assets/images/hero-image.jpg';

const Hero = () => {
  const { t } = useTranslation();

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        delay: 0.4, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    float: {
      y: ["0%", "-5%", "0%"],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  const floatingElementVariants = {
    float: {
      scale: [1, 1.1, 1],
      rotate: [0, 15, -15, 0],
      borderRadius: [
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 70% 70% 30% / 30% 30% 70% 70%"
      ],
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <AnimatedSection delay={0.2} className="hero-content">
        <h1>
          <Trans i18nKey="hero.title" components={{ 1: <span className="highlight" /> }} />
        </h1>
        <TextReveal text={t('hero.subtitle')} delay={0.4} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
         <a href="#projects">
    <Button>{t('hero.button')}</Button>
  </a>
        </motion.div>
      </AnimatedSection>
      
      <motion.div 
        className="hero-image-container"
        initial="hidden"
        animate={["visible", "float"]}
        variants={imageVariants}
      >
        <div className="image-wrapper">
          <motion.img 
            src={heroImage} 
            alt={t('hero.imageAlt')} 
            className="hero-image"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="floating-element"
            variants={floatingElementVariants}
            animate="float"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;