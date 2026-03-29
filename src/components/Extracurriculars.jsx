import { motion } from 'framer-motion';
import { extracurriculars } from '../data/portfolio';
import { Sparkles } from 'lucide-react';

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Beyond Academics</p>
          <h2 className="section-title">Extracurricular Activities</h2>
          <p className="section-subtitle">
            Events, hackathons, and activities I've been part of.
          </p>
        </motion.div>
      </div>

      <div className="extras-grid">
        {extracurriculars.map((item, i) => (
          <motion.div
            className="extra-card"
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="extra-year">
              <Sparkles size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
              {item.year}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
