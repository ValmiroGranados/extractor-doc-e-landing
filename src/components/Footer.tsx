import React, { useState } from 'react';
import LegalModal from './LegalModal';
import { legalData } from '../utils/legalTexts';

const Footer: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' }>({ 
    isOpen: false, 
    type: 'terms' 
  });

  const openLegal = (e: React.MouseEvent, type: 'terms' | 'privacy') => {
    e.preventDefault();
    setModalState({ isOpen: true, type });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div className="grid-2" style={{ marginBottom: '4rem', gridTemplateColumns: '1.5fr 1fr 1.5fr', alignItems: 'start' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/icon.svg" alt="Extractor Doc-e Icon" style={{ width: 32, height: 32 }} />
              <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-white)' }}>
                Extractor Doc-e
              </span>
            </div>
            <p style={{ color: 'var(--color-bone-muted)', maxWidth: 300, lineHeight: 1.6 }}>
              Herramienta multiplataforma para extracción automatizada de facturación electrónica DIAN Colombia.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Recursos</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="https://docs.misimpuestosco.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-bone-muted)' }}>Manual de Usuario</a></li>
              <li><a href="#downloads" style={{ color: 'var(--color-bone-muted)' }}>Descargas</a></li>
              <li><a href="#features" style={{ color: 'var(--color-bone-muted)' }}>Características</a></li>
              <li><a href="#pricing" style={{ color: 'var(--color-bone-muted)' }}>Licencias</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contacto y Soporte</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-bone-muted)' }}>
              <li>WhatsApp: <a href="https://wa.me/573025337539" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-bone-muted)', textDecoration: 'underline' }}>+57 302 533 7539</a></li>
              <li>Email: <a href="mailto:soporte@misimpuestosco.com" style={{ color: 'var(--color-bone-muted)', textDecoration: 'underline' }}>soporte@misimpuestosco.com</a></li>
              <li>Dirección: Calle 71 sur # 46a 31<br/>Medellín, Antioquia</li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'var(--color-bone-muted)', fontSize: '0.9rem' }}>
          <div>
            &copy; {new Date().getFullYear()} Extractor Doc-e por Mis Impuestos CO. Las marcas mencionadas pertenecen a sus respectivos dueños.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" onClick={(e) => openLegal(e, 'terms')} style={{ color: 'var(--color-bone-muted)' }}>Términos y Condiciones</a>
            <a href="#" onClick={(e) => openLegal(e, 'privacy')} style={{ color: 'var(--color-bone-muted)' }}>Política de Privacidad</a>
          </div>
        </div>
      </div>
      
      <LegalModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={legalData[modalState.type].title}
        content={legalData[modalState.type].content}
      />
    </footer>
  );
};

export default Footer;
