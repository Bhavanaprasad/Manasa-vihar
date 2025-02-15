import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const images = [
    '/images/vada.jpeg',
    '/images/dosaidly.webp',
    '/images/coffee.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleViewMenuClick = () => {
    navigate('/menu'); // Navigate to the Menu page
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="home">
      <div
        className="hero-slider"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="hero-content">
          <h1>PALATABLE INDIAN FOOD</h1>
          <button className="order-button" onClick={handleViewMenuClick}>VIEW MENU</button>
        </div>
        <button className="arrow left-arrow" onClick={prevImage}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Home;