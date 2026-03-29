import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeployedApps from './components/DeployedApps';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="app-wrapper">
      {/* Ambient background effects */}
      <div className="bg-gradient-overlay" />
      <div className="bg-grid" />

      <Navbar />

      <main className="main-content">
        <Hero />
        <DeployedApps />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Extracurriculars />
        <Contact />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
