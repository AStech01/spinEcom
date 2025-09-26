import React, { useRef, useState, useEffect } from 'react';
import brand_1 from '../assets/e739460cd108735741d1d9055086c2f0a6405e00.png';
import brand_2 from '../assets/c5a9afa59955fcc816679572270614f87c4a9856.png';
import brand_3 from '../assets/a1fe17b59a15a7fda1331178c0eb12d7e00cbf3c.png';

const testimonials = [
  {
    image: brand_1,
    alt: 'Brand 1',
    quote: 'How to choose size of Television fit to your living room',
    content: "45 Minutes ago in Experience"
  },
  {
    image: brand_2,
    alt: 'Brand 2',
    quote: 'The massage chair is so luxurious, it helps me relax after a long day.',
    content: "2 hours ago in Wellness"
  },
  {
    image: brand_3,
    alt: 'Brand 3',
    quote: 'OKODO Hero 11+ is a game changer with amazing price and features.',
    content: "Yesterday in Tech"
  },
];

export default function TestimonialsVerticalCarousel() {
  const carouselRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const ITEM_HEIGHT = 140; // px

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollTop > 0);
    setCanScrollNext(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollByHeight = (direction = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ top: ITEM_HEIGHT * direction, behavior: 'smooth' });
  };

  return (
  <div className="">
  <div className="relative  p-6 bg-[#EBEEF6] rounded-lg">
     <div className="flex items-center justify-between -mt-3 mb-4">
        <h2 className="text-2xl font-bold">Popular Brands</h2>
        <button className="text-black font-medium text-[10px] hover:underline">
          VIEW ALL &gt;
        </button>
      </div>

    {/* Buttons */}
    <button
      onClick={() => scrollByHeight(-1)}
      disabled={!canScrollPrev}
      aria-label="Previous"
      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[10px]
        bg-white text-[#4B3EC4] text-sm font-medium px-4 py-2 rounded shadow
        ${!canScrollPrev ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
      Pr<br />e<br />v
    </button>

    <button
      onClick={() => scrollByHeight(1)}
      disabled={!canScrollNext}
      aria-label="Next"
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[10px]
        bg-white text-[#4B3EC4] text-sm font-medium px-4 py-2 rounded shadow
        ${!canScrollNext ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
      N<br />e<br />xt
    </button>

 
    <div
      ref={carouselRef}
      className="overflow-y-auto no-scrollbar"
      style={{ height: ITEM_HEIGHT, scrollSnapType: 'y mandatory', width: '100%' }}
    >
      {testimonials.map(({ image, alt, quote, content }, idx) => (
        <div
          key={idx}
          className="flex bg-white rounded-lg shadow-md p-4 mb-2"
          style={{
            height: ITEM_HEIGHT,
            scrollSnapAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
       
          <div className="flex-shrink-0 mr-4">
            <img
              src={image}
              alt={alt}
              className="rounded-lg w-32 h-[100px] object-cover"
              loading="lazy"
            />
          </div>

         
          <h4 className="flex flex-col justify-center text-black font-semibold -mt-3 text-[16px]">
            <span>{quote}</span>
            <span className="text-xs font-normal text-gray-500 mt-6">{content}</span>
          </h4>
        </div>
      ))}
    </div>
  </div>



</div>

    
  );
}
