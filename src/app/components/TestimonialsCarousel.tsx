"use client";
import React, { useState } from "react";

interface Testimonial {
  name: string;
  quote: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    quote: "This service is amazing. Highly recommend it.",
    position: "CEO, Company A",
  },
  {
    name: "Jane Doe",
    quote: "Fantastic experience. Will use again.",
    position: "Manager, Company B",
  },
  // Add more testimonials as needed
];

const TestimonialsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prevCurrent) =>
        (prevCurrent - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="text-lg font-bold mb-2">{testimonials[current].name}</div>
      <div className="text-sm italic mb-4">{`"${testimonials[current].quote}"`}</div>
      <div className="text-xs mb-4">{testimonials[current].position}</div>
      <button className="mr-4" onClick={prevTestimonial}>
        Previous
      </button>
      <button onClick={nextTestimonial}>Next</button>
    </div>
  );
};

export default TestimonialsCarousel;
