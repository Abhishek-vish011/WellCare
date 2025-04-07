import React from 'react';
import ImageSlider from './ImageSlider';

const Usage = () => {
  const images = [
    '/media/Images/Complex_Hospital.jpg',
    '/media/Images/Meritra_Hospital.jpg' ,
    '/media/Images/city_Hospital.webp',
    '/media/Images/Medi_Hospital.jpg' ,
  ].map(img => `${img}?w=1600&h=900&auto=format&fit=crop`);

  return (
    <div style={{ height: '800px', width: '100%', margin: '0 auto'}}>
      <ImageSlider images={images} slideInterval={3000} />
    </div>
  );
};

export default Usage;