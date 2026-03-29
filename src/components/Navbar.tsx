import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.25rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/icon.svg" alt="Extractor Doc-e Icon" style={{ width: 32, height: 32 }} />
        <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--color-white)' }}>
          Extractor Doc-e
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div className="nav-links-text" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#features" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-bone-muted)' }}>Módulos</a>
          <a href="#downloads" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-bone-muted)' }}>Descargas</a>
          <a href="#pricing" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-bone-muted)' }}>Precios</a>
        </div>
        <a href="#downloads" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
          Obtener Trial
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
