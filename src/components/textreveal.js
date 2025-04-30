import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextReveal = ({ text, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default TextReveal;