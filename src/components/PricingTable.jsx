import React from 'react';

const plans = [
    { name: "Básico", price: "$5", desc: "Para un sitio web inicial.", features: ["1 Sitio Web", "10 GB SSD", "Dominio NO Incluido"], highlight: false },
    { name: "PRO", price: "$15", desc: "Máximo rendimiento y el más popular.", features: ["Sitios Ilimitados", "NVMe Ilimitado", "Dominio GRATIS (1 año)"], highlight: true },
    { name: "Empresarial", price: "$30", desc: "Para proyectos grandes y e-commerce.", features: ["Sitios Ilimitados", "Recursos Dedicados", "Migración VIP GRATIS"], highlight: false },
];

const PricingTable = () => (
    <section id="planes" className="py-5 bg-white">
        <div className="container text-center">
            <h2 className="mb-5 display-6 fw-bold">
                Elige la Potencia que Necesitas
            </h2>
            
            <div className="row g-4 justify-content-center">
                {plans.map((plan) => (
                    <div key={plan.name} className="col-md-4">
                        <div className={`card h-100 shadow-sm ${plan.highlight ? 'border-primary border-3' : ''}`}>
                            
                            <div className="card-body d-flex flex-column">
                                {plan.highlight && (
                                    <span className="badge bg-danger rounded-pill position-absolute top-0 start-50 translate-middle">
                                        Recomendado
                                    </span>
                                )}

                                <h3 className="card-title fs-3 fw-bold mt-2">{plan.name}</h3>
                                <p className="text-muted">{plan.desc}</p>
                                
                                <div className="my-3">
                                    <span className="fs-1 fw-bolder text-primary">{plan.price}</span>
                                    <span className="text-muted">/mes</span>
                                </div>
                                
                                <ul className="list-unstyled text-start mb-4 mx-auto" style={{maxWidth: '200px'}}>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="mb-2">
                                            <span className={`me-2 ${feature.includes("NO") ? 'text-danger' : 'text-success'}`}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className={`btn mt-auto ${plan.highlight ? 'btn-primary' : 'btn-outline-primary'} fw-bold btn-lg`}>
                                    Contratar {plan.name}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PricingTable;