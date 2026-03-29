import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications.
          </p>
        </motion.div>
      </div>

      <div className="education-timeline">
        {education.map((edu, i) => (
          <motion.div
            className="education-item"
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <div className="education-meta">
              <span>
                <Calendar size={13} />
                {edu.period}
              </span>
              <span>
                <MapPin size={13} />
                {edu.location}
              </span>
              <span className="score">
                <Award size={13} />
                {edu.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
