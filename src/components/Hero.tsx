import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { detectOS, getDownloadInfo, isMobile } from '../utils/os';
import { Download, Monitor, Terminal, Apple } from 'lucide-react';

const Hero: React.FC = () => {
  const [osData, setOsData] = useState(getDownloadInfo('unknown'));

  useEffect(() => {
    setOsData(getDownloadInfo(detectOS()));
  }, []);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile()) {
      e.preventDefault();
      alert('La aplicación sólo está disponible para PC.');
    }
  };

  const IconComponent = () => {
    if (osData.icon === 'Apple') return <Apple size={20} />;
    if (osData.icon === 'Monitor') return <Monitor size={20} />;
    if (osData.icon === 'Terminal') return <Terminal size={20} />;
    return <Download size={20} />;
  };

  return (
    <section className="section-padding text-center" style={{ position: 'relative', overflow: 'hidden', paddingTop: '12rem', paddingBottom: '4rem' }}>
      <div className="glow-effect"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="badge">Auditoría y Causación Automatizada</span>
          <h1 className="title-xl" style={{ maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
            Descarga documentos de la DIAN en segundos
          </h1>
          <p className="subtitle" style={{ marginBottom: '2.5rem' }}>
            Extrae facturas electrónicas, notas y detalles clave directamente de la DIAN. 
            Audita a detalle y exporta tu información a compresión fiscal sin demoras.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a href={osData.url} onClick={handleDownloadClick} className="btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
              {IconComponent()}
              {osData.label}
            </a>
            <a href="#how-it-works" className="btn-secondary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
              Ver cómo funciona
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ position: 'relative', margin: '0 auto', maxWidth: '1000px' }}
        >
          <div style={{
            position: 'absolute',
            inset: -4,
            background: 'linear-gradient(180deg, rgba(249, 246, 240, 0.1), transparent)',
            borderRadius: 24,
            filter: 'blur(20px)',
            opacity: 0.5
          }}></div>
          <img 
            src="/extractor-doc-resultados-v1.png" 
            alt="Extractor Doc-e Software" 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 20,
              border: '1px solid var(--color-border)',
              display: 'block',
              position: 'relative'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
