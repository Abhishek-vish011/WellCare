import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, slideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  
  // Reset timer when component unmounts or dependencies change
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      goToNext();
    }, slideInterval);
    
    return () => clearInterval(timerRef.current);
  }, [currentIndex, slideInterval]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {/* <div className="left-arrow" onClick={goToPrevious}>❰</div>
        <div className="right-arrow" onClick={goToNext}>❱</div> */}
        <div 
          className="slide" 
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <h1>Doctor Appointment</h1>
        </div>
      </div>
      <div className="dots-container">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;