import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: '¿Puedo usar la misma licencia en dos equipos?', a: 'No. Cada licencia está vinculada a un único equipo (Machine ID). Para cambiar de equipo, debes desactivar tu licencia desde la configuración y solicitar desvincularla al administrador.' },
  { q: '¿Qué pasa si no tengo internet?', a: 'La aplicación contiene un modo offline automático. Si validas tu licencia con internet, puedes usar la app de forma desconectada hasta por 7 días.' },
  { q: '¿Cómo obtengo mi Token de la DIAN?', a: 'Ingresa al portal de la DIAN con tu cuenta corporativa, ve a la sección de facturación electrónica y copia el token de acceso desde tu perfil.' },
  { q: '¿Cuántos documentos puedo extraer a la vez?', a: 'No hay límite técnico. Extractor Doc-e obtiene todos los documentos del rango de fechas que solicites. Para grandes volúmenes, se recomienda filtrar mes a mes.' },
  { q: '¿Se guardan mis credenciales/token en disco?', a: 'No. Las credenciales, el token y contraseñas de certificado nunca se almacenan en el disco duro, operando completamente en memoria durante tu sesión activa para garantizar la seguridad.' }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-black-light)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="badge">Preguntas Frecuentes</span>
          <h2 className="title-lg">Soporte Transparente</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ padding: '1.5rem', borderRadius: 16, backgroundColor: 'rgba(5,5,5,0.4)', border: '1px solid var(--color-border)', cursor: 'pointer' }}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>{faq.q}</h4>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown color="var(--color-bone)" />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ marginTop: '1rem', color: 'var(--color-bone-muted)', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
