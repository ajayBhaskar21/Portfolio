import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build modern applications.
          </p>
        </motion.div>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            className="skill-category-card"
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{category}</h3>
            <div className="skill-items">
              {items.map((skill, j) => (
                <motion.span
                  className="skill-item"
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
