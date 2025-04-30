import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/animatedsection';
import TextReveal from '../components/textreveal';
import '../styles/about.css';

const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    t('skills.strategic'),
    t('skills.project'),
    t('skills.data'),
    t('skills.team'),
    t('skills.creative'),
    t('skills.marketing')
  ];

  return (
    <section id="about" className="about-section">
      <AnimatedSection className="about-container" delay={0.1}>
        <h2 className="section-title">
          <TextReveal text={t('about.title')} />
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p><TextReveal text={t('about.description1')} delay={0.2} /></p>
            <p><TextReveal text={t('about.description2')} delay={0.3} /></p>
          </div>
          <div className="skills">
            <h3><TextReveal text={t('about.skillsTitle')} delay={0.4} /></h3>
            <ul>
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;