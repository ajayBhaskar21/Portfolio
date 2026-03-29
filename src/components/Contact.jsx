import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <>
      <section id="contact" className="motion-section contact-section">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              I'm always open to new opportunities, collaborations, and interesting conversations.
            </p>
          </motion.div>
        </div>

        <div className="contact-links">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="contact-link-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.0 }}
          >
            <div className="contact-icon"><Mail size={18} /></div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{personalInfo.email}</div>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${personalInfo.phone}`}
            className="contact-link-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="contact-icon"><Phone size={18} /></div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{personalInfo.phone}</div>
            </div>
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
          >
            <div className="contact-icon"><LinkedinIcon size={18} /></div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">Ajay Bhaskar</div>
            </div>
          </motion.a>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <div className="contact-icon"><GithubIcon size={18} /></div>
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">ajayBhaskar21</div>
            </div>
          </motion.a>

          <motion.div
            className="contact-link-card"
            style={{ cursor: 'default' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.32 }}
          >
            <div className="contact-icon"><MapPin size={18} /></div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">{personalInfo.location}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer>
        <p>
          Built with <span className="heart"><Heart size={14} style={{ verticalAlign: 'middle' }} /></span> by {personalInfo.shortName} &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
