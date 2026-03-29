import { motion } from 'framer-motion';
import { ExternalLink, Globe, Plus } from 'lucide-react';
import { deployedApps } from '../data/portfolio';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function DeployedApps() {
  return (
    <section id="deployed-apps" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Showcase</p>
          <h2 className="section-title">Deployed Applications</h2>
          <p className="section-subtitle">
            Live applications I've built and deployed. Click to explore them in action.
          </p>
        </motion.div>
      </div>

      <div className="deployed-apps-grid">
        {deployedApps.map((app, i) => (
          <motion.div
            className="deployed-app-card"
            key={app.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={cardVariants}
          >
            <div className="deployed-app-card-preview">
              <div className="app-icon">
                <Globe size={28} />
              </div>
            </div>
            <div className="deployed-app-card-body">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              <div className="deployed-app-tags">
                {app.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              {app.liveUrl && (
                <a
                  href={app.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deployed-app-link"
                >
                  Visit Live App <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}

        {/* Placeholder card for future apps */}
        <motion.div
          className="add-app-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: deployedApps.length * 0.12 }}
        >
          <div className="add-icon">
            <Plus size={22} />
          </div>
          <p>More apps coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
}
