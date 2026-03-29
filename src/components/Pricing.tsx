import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  { 
    name: 'Licencia 1 Año', 
    duration: '12 Meses', 
    desc: 'Acceso total durante un año calendario.', 
    originalPrice: '$199,900',
    price: '$99,900', 
    url: 'https://checkout.bold.co/payment/LNK_FPA9DBK6EP',
    featured: false 
  },
  { 
    name: 'Licencia 2 Años', 
    duration: '24 Meses', 
    desc: 'La mejor relación costo-beneficio para tu tranquilidad.', 
    originalPrice: '$299,900',
    price: '$149,900', 
    url: 'https://checkout.bold.co/payment/LNK_ESZZG0EY6U',
    featured: true 
  },
  { 
    name: 'Licencia Vitalicia', 
    duration: 'Lifetime', 
    desc: 'Un solo pago, el software es tuyo para siempre.', 
    originalPrice: '$399,900',
    price: '$199,900', 
    url: 'https://checkout.bold.co/payment/LNK_L7OVK48AAC',
    featured: false 
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="badge">Planes y Licencias</span>
          <h2 className="title-lg">Elige Tu Plan Ideal</h2>
          <p className="subtitle">Precios en Pesos Colombianos (COP). Pago seguro y activación inmediata.</p>
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
              
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.1rem', color: 'var(--color-border)', textDecoration: 'line-through', fontWeight: 500, marginBottom: '-0.25rem' }}>
                  {plan.originalPrice}
                </span>
                <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  {plan.price} <span style={{ fontSize: '1rem', color: 'var(--color-bone-muted)', fontWeight: 400 }}>/ {plan.duration}</span>
                </div>
              </div>
              
              <a href={plan.url} className={plan.featured ? "btn-primary" : "btn-secondary"} style={{ width: '100%', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                Adquirir Licencia
              </a>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Todas las funciones de extracción', 'Uso offline por 7 días', 'Soporte DIAN: Token y Cert.', 'Exportación .CSV Detallada'].map((feature, i) => (
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
