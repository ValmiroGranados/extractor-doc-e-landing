import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  { name: 'Trial', duration: '3 días', desc: 'Prueba gratuita con todas las funciones', price: 'Gratis' },
  { name: 'Suscripción Anual', duration: '12 Meses', desc: 'Acceso total y soporte continuo', price: 'Contactar', featured: true },
  { name: 'Licencia Perpetua', duration: 'Lifetime', desc: 'Un solo pago, software para siempre', price: 'Contactar' }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="badge">Planes y Licencias</span>
          <h2 className="title-lg">Adaptabilidad a tu Medida</h2>
          <p className="subtitle">Usa la aplicación hasta 7 días sin conexión (offline mode) tras activar la licencia en cualquier plan.</p>
        </div>

        <div className="grid-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card"
              style={{
                position: 'relative',
                border: plan.featured ? '1px solid var(--color-bone)' : '1px solid var(--color-border)',
                transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.featured ? 10 : 1,
                padding: '3rem 2.5rem'
              }}
            >
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-bone)', color: 'var(--color-black)',
                  padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 600
                }}>
                  Más Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ color: 'var(--color-bone-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', minHeight: '44px' }}>
                {plan.desc}
              </p>
              
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
                {plan.price} <span style={{ fontSize: '1rem', color: 'var(--color-bone-muted)', fontWeight: 400 }}>/ {plan.duration}</span>
              </div>
              
              <button className={plan.featured ? "btn-primary" : "btn-secondary"} style={{ width: '100%', marginBottom: '2rem' }}>
                Adquirir Licencia
              </button>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Todas las funciones de extracción', 'Uso offline por 7 días', 'Soporte DIAN: Token y Certificado', 'Exportación .CSV Detallada'].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-bone)' }}>
                    <CheckCircle2 size={18} color="var(--color-bone-muted)" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
