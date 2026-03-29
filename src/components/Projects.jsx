import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="motion-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've worked on, from full-stack apps to machine learning research.
          </p>
        </motion.div>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
            <div className="deployed-app-tags" style={{ marginBottom: '16px' }}>
              {project.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.linkLabel} <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <GithubIcon size={14} /> Source Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
