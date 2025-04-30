import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/usescrollanimation';
import '../styles/projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const [ref, controls] = useScrollAnimation();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: [
        t('projects.tags.data'),
        t('projects.tags.market'),
        t('projects.tags.tableau')
      ]
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: [
        t('projects.tags.branding'),
        t('projects.tags.marketing'),
        t('projects.tags.strategy')
      ]
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: [
        t('projects.tags.management'),
        t('projects.tags.sustainability'),
        t('projects.tags.leadership')
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      color: 'var(--text-dark)',
      transition: { delay: 0.2, duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container" ref={ref}>
        <h2 className="section-title">
          <motion.span
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className="highlight-title"
          >
            {t('projects.title')}
          </motion.span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(46, 125, 50, 0.2)'
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;