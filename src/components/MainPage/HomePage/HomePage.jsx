// HomePage.jsx
import React, { useState, useEffect } from 'react';
import './HomePage.css';

const images = [
    {
        src: '/img/bg2.jpg',
        alt: 'Imagen 1',
        title: 'WONDERFUL.',
        subtitle: 'ISLAND',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttonText: 'Read More'
    },
    {
        src: '/img/bg2.jpg',
        alt: 'Imagen 2',
        title: 'AMAZING.',
        subtitle: 'BEACH',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonText: 'Discover'
    },
    {
        src: '/img/bg2.jpg',
        alt: 'Imagen 3',
        title: 'BEAUTIFUL.',
        subtitle: 'NATURE',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        buttonText: 'Explore'
    },
];

function HomePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const { src, alt, title, subtitle, description, buttonText } = images[currentImageIndex];

    return (
        <div className="carousel-container position-relative">
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="carousel position-relative rounded shadow">
                <button className="carousel-control prev btn position-absolute top-50 start-0 translate-middle-y" onClick={prevImage}>
                    &#10094;
                </button>
                <div className="carousel-slide position-relative w-100 h-100">
                    <img src={src} alt={alt} className="carousel-image w-100 h-100 object-fit-cover rounded" />
                    <div className="carousel-text position-absolute text-white">
                        <h1 className="display-1 fw-bold mb-2">{title}</h1>
                        <h2 className="display-3 fw-bold mb-3">{subtitle}</h2>
                        <p className="fs-5 mb-4">{description}</p>
                        <button className="carousel-button btn btn-outline-light btn-lg px-4 py-2">{buttonText}</button>
                    </div>
                </div>
                <button className="carousel-control next btn position-absolute top-50 end-0 translate-middle-y" onClick={nextImage}>
                    &#10095;
                </button>
                <div className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator btn p-0 rounded-circle ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;