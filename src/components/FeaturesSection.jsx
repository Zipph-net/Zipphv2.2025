import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
    <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 border-0 shadow-sm text-center">
            <div className="mb-3 mx-auto rounded-circle bg-primary-subtle text-primary p-3" style={{ width: '60px', height: '60px', fontSize: '2rem' }}>
                {icon}
            </div>
            <h3 className="h5 fw-bold text-dark">{title}</h3>
            <p className="text-muted">{description}</p>
        </div>
    </div>
);

const FeaturesSection = () => (
    <section id="caracteristicas" className="bg-light py-5">
        <div className="container">
            <h2 className="text-center mb-5 display-6 fw-bold text-dark">
                Características que te Impulsan
            </h2>
            
            <div className="row justify-content-center">
                <FeatureCard 
                    title="Velocidad NVMe SSD" 
                    description="Almacenamiento de última generación para tiempos de carga ultrarrápidos, clave para el SEO." 
                    icon="🚀"
                />
                <FeatureCard 
                    title="Soporte 24/7/365" 
                    description="Asistencia técnica de expertos en español disponible por chat, email y teléfono." 
                    icon="👨‍💻"
                />
                <FeatureCard 
                    title="Seguridad Avanzada" 
                    description="Firewall, protección DDoS, y Certificados SSL/TLS gratuitos para todos tus dominios." 
                    icon="🔒"
                />
            </div>
        </div>
    </section>
);

export default FeaturesSection;