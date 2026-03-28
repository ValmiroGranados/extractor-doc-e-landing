import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '6rem' }}>
          <span className="badge">Flujo de Trabajo</span>
          <h2 className="title-lg">Sincroniza y Consolida en 3 Pasos</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {/* Step 1 */}
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>1. Autenticación Transparente</h3>
              <p className="subtitle" style={{ margin: '0' }}>
                Olvídate de procesos burocráticos. Conecta directo a la DIAN mediante tu <strong>Token</strong> 
                (para uso sencillo) o <strong>Certificado Digital</strong> (.pfx o .p12) para conexiones duraderas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/extractor-doc-configuracion-v1.png" alt="Configuración DIAN" style={{ width: '100%', borderRadius: 16, border: '1px solid var(--color-border)' }} />
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="grid-2" style={{ direction: 'rtl' }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ direction: 'ltr' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>2. Extrae con Alta Precisión</h3>
              <p className="subtitle" style={{ margin: '0' }}>
                Filtra por fechas, tipo (Emitidas/Recibidas) o usa la <strong>Consulta Masiva por CUFE/CUDE</strong>.
                Soporta reanudación automática si se corta tu conexión.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/extractor-doc-resultados-v2.png" alt="Resultados y Extracción" style={{ width: '100%', borderRadius: 16, border: '1px solid var(--color-border)' }} />
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>3. Exportación Lineal (CSV)</h3>
              <p className="subtitle" style={{ margin: '0' }}>
                Obtén un modelo de datos estructurado. Usa la descarga detallada para consolidar automáticamente  
                ítems, líneas de facturas, retenciones e impuestos directos en Excel.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/extractor-doc-resultados-descarga-excel-v1.png" alt="Descarga Excel" style={{ width: '100%', borderRadius: 16, border: '1px solid var(--color-border)' }} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
