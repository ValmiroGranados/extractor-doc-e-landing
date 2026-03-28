import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
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
          
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Recursos</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="#how-it-works" style={{ color: 'var(--color-bone-muted)' }}>Guía de Uso</a></li>
                <li><a href="#downloads" style={{ color: 'var(--color-bone-muted)' }}>Descargas</a></li>
                <li><a href="#features" style={{ color: 'var(--color-bone-muted)' }}>Características</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Soporte</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="#pricing" style={{ color: 'var(--color-bone-muted)' }}>Licencias</a></li>
                <li><a href="#" style={{ color: 'var(--color-bone-muted)' }}>Términos y Condiciones</a></li>
                <li><a href="#" style={{ color: 'var(--color-bone-muted)' }}>Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--color-bone-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Extractor Doc-e. Creado para la eficiencia corporativa. Las marcas mencionadas (DIAN) pertenecen a sus respectivos dueños.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
