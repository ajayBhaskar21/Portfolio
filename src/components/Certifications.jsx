import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and courses I've completed.
          </p>
        </motion.div>
      </div>

      <div className="certifications-list">
        {certifications.map((cert, i) => (
          <motion.div
            className="cert-card"
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="cert-icon">
              <Award size={18} />
            </div>
            <div className="cert-name">
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name} <ExternalLink size={12} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                </a>
              ) : (
                cert.name
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
