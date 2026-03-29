import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Milestones and recognitions along my journey.
          </p>
        </motion.div>
      </div>

      <div className="achievements-grid">
        {achievements.map((ach, i) => (
          <motion.div
            className="achievement-card"
            key={ach.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="achievement-year">{ach.year}</div>
            <h3>
              <Trophy size={16} style={{ marginRight: '8px', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />
              {ach.title}
            </h3>
            <p>{ach.description}</p>
            {ach.link && (
              <a href={ach.link} target="_blank" rel="noopener noreferrer">
                View Details <ExternalLink size={12} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
