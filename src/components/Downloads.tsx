import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Apple, Terminal } from 'lucide-react';

const downloads = [
  {
    os: 'Windows',
    icon: <Monitor size={48} color="var(--color-bone)" />,
    desc: 'Windows 10 o superior (x64)',
    link: '#', 
    id: 'download-win'
  },
  {
    os: 'macOS',
    icon: <Apple size={48} color="var(--color-bone)" />,
    desc: 'Intel o Apple Silicon M1/M2/M3',
    link: '#', 
    id: 'download-mac'
  },
  {
    os: 'Linux',
    icon: <Terminal size={48} color="var(--color-bone)" />,
    desc: 'Ubuntu, Fedora (.AppImage / .deb)',
    link: '#', 
    id: 'download-linux'
  }
];

const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="section-padding" style={{ backgroundColor: 'var(--color-black-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="badge">Multiplataforma</span>
          <h2 className="title-lg">Disponible para tu Ecosistema</h2>
        </div>

        <div className="grid-3">
          {downloads.map((d, index) => (
            <motion.div
              key={d.os}
              id={d.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card text-center"
              style={{ padding: '3rem 2rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {d.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{d.os}</h3>
              <p style={{ color: 'var(--color-bone-muted)', marginBottom: '2rem' }}>{d.desc}</p>
              
              <a href={d.link} className="btn-secondary" style={{ display: 'inline-block', width: '100%' }}>
                Descargar Instalador
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
