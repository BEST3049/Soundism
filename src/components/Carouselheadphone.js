import React, { useState, useEffect } from 'react';
import './CarouselSlider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CarouselSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=> {
    AOS.init({duration:2000});
  })
  useEffect(() => {
    const lastIndex = items.length - 1;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, items]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-slider-container" data-aos="fade-down">
      <div className="carousel-slider">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : index === (currentIndex - 1 + items.length) % items.length ? 'prev' : index === (currentIndex + 1) % items.length ? 'next' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="dots-container">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <button className="carousel-arrow prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="carousel-arrow next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default CarouselSlider;
