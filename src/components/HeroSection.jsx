import React from 'react';

const HeroSection = () => (
  <section className="bg-light pt-5 pb-5">
    <div className="container text-center pt-5">
      
      {/* Titular */}
      <h1 className="display-4 fw-bolder mb-3 mt-5">
        Hosting Ultra-Rápido y <span className="text-danger">Seguro</span> para tu Éxito.
      </h1>
      
      {/* Subtítulo */}
      <p className="lead text-muted mb-4 mx-auto" style={{maxWidth: '700px'}}>
        99.9% Uptime garantizado. Migración GRATIS y Soporte 24/7 en español.
      </p>
      
      {/* CTA Grande */}
      <a href="#planes" className="btn btn-danger btn-lg fw-bold shadow-lg" style={{padding: '12px 30px'}}>
        Ver Todos los Planes
      </a>
      
      {/* Elementos de Confianza */}
      <div className="d-flex justify-content-center flex-wrap mt-4 small text-muted">
          <span className="mx-3">✅ 30 Días de Garantía</span>
          <span className="mx-3">🔒 SSL Gratuito</span>
          <span className="mx-3">🚀 99.9% Uptime</span>
      </div>
      
    </div>
  </section>
);

export default HeroSection;