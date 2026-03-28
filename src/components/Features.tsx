import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, TableProperties, DownloadCloud } from 'lucide-react';

const coreFeatures = [
  {
    icon: <FileSearch size={32} color="var(--color-bone)" />,
    title: 'Extracción Simple y Rápida',
    desc: 'Obtiene metadatos generales (fechas, montos, emisor/receptor). Ideal para revisión rápida y verificación del estado.',
  },
  {
    icon: <TableProperties size={32} color="var(--color-bone)" />,
    title: 'Extracción Completa Detallada',
    desc: 'Baja elXML e integra el detalle línea por línea, desglosando impuestos, terceros y retenciones. Excelente para contabilidad.',
  },
  {
    icon: <DownloadCloud size={32} color="var(--color-bone)" />,
    title: 'Descarga de Anexos PDF/XML',
    desc: 'Descarga directamente los archivos PDF y XML originales organizados por rango de fechas. Listo para archivado y soporte offline.',
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding" style={{ backgroundColor: 'var(--color-black-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="badge">Características Core</span>
          <h2 className="title-lg">Múltiples Modos de Ejecución</h2>
          <p className="subtitle">Configura el nivel de detalle de extracción que requieres en cada momento.</p>
        </div>
        
        <div className="grid-3">
          {coreFeatures.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 16, 
                backgroundColor: 'rgba(249, 246, 240, 0.05)',
                border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{feat.title}</h3>
              <p style={{ color: 'var(--color-bone-muted)', lineHeight: 1.6 }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
