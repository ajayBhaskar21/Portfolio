import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon } from './icons';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <span className="dot" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.shortName}</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href="#deployed-apps" className="btn-primary">
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-value">3+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">200+</span>
            <span className="hero-stat-label">LeetCode Problems</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">8.76</span>
            <span className="hero-stat-label">CGPA</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">5+</span>
            <span className="hero-stat-label">Certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
