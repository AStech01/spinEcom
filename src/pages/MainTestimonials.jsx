import React from 'react';
import TestimonialsVerticalCarousel from '../components/TestimonialsCarousel';
import Testimonials from '../components/Testimonials';

const MainTestimonials = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row  gap-4  mt-5">
     
      <div className="w-full md:w-1/2">
        <TestimonialsVerticalCarousel />
      </div>
      <div className="w-full md:w-1/2">
        <Testimonials />
      </div>
    </div>
  );
};

export default MainTestimonials;
