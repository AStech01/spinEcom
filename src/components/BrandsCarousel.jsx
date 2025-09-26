import React, { useRef, useState, useEffect } from 'react';
import brand_1 from '../assets/e739460cd108735741d1d9055086c2f0a6405e00.png';
import brand_2 from '../assets/c5a9afa59955fcc816679572270614f87c4a9856.png';
import brand_3 from '../assets/a1fe17b59a15a7fda1331178c0eb12d7e00cbf3c.png';

const images = [
  {
    src: brand_1,
    alt: 'Brand 1',
    title: 'Acelos 3D',
    subtitle: ['VR Headset and', 'Controllers'],
    buttonStyle: 'bg-black rounded-full text-white text-[10px]',
  },
  {
    src: brand_2,
    alt: 'Brand 2',
    title: ['Massage Chair', 'Luxury'],
    subtitle: ['Fuka Relax Full Body', 'Massage Chair'],
    titleStyle: 'text-white text-sm',
    subtitleStyle: 'text-white text-xs',
    buttonStyle: 'bg-white text-black rounded-full text-[10px]',
  },
  {
    src: brand_3,
    alt: 'Brand 3',
    title: [
      <span key="okodo" className="font-semibold">OKODO</span>,
      <span key="hero" className="text-white font-light">Hero 11+</span>,
      <span key="black" className="text-white font-light">Black</span>,
    ],
    subtitle: [
      <span key="From" className="">From</span>,
      <span key="price" className="text-green-500 text-xl font-semibold">$169</span>,
    ],
    titleStyle: 'text-white  text-sm font-semibold',
    subtitleStyle: 'text-[10px] mt-10 text-[#999999]',
  },
];


export default function BrandsCarousel() {
  const carouselRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 0);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollByWidth = (direction = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.9 * direction;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
 <div className="max-w-5xl mx-auto relative bg-[#EBEEF6] px-4 py-4 rounded-lg mt-5">
 
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-bold pl-2">Popular Brands</h2>
    <button className="text-black font-medium text-[10px] hover:underline">VIEW ALL &gt;</button>
  </div>

  <div className="relative">

    <button
      onClick={() => scrollByWidth(-1)}
      disabled={!canScrollPrev}
      aria-label="Previous"
      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[10px]
        bg-white text-[#4B3EC4] text-sm font-medium px-4 h-auto py-2 -ml-5 rounded shadow
        ${!canScrollPrev ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
      Pr<br />e<br />v
    </button>


    <button
      onClick={() => scrollByWidth(1)}
      disabled={!canScrollNext}
      aria-label="Next"
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[10px]
        bg-white text-[#4B3EC4] text-sm font-medium px-4 h-auto py-2 -mr-4 rounded shadow
        ${!canScrollNext ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
      N<br />e<br />xt
    </button>


    <ul
      ref={carouselRef}
      className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none px-2"
      style={{ scrollbarWidth: 'none' }}
    >
      {images.map(
        (
          { src, alt, title, subtitle, buttonStyle, titleStyle = '', subtitleStyle = '' },
          idx
        ) => (
          <li
            key={idx}
            className="flex-shrink-0 snap-center w-[350px] h-[230px] relative rounded-lg overflow-hidden shadow-lg"
          >
            <figure className="relative w-full h-full">
              <img
                src={src}
                alt={alt}
                className="object-cover w-full h-full"
                loading="lazy"
              />

        
              <div className="absolute inset-0 pl-7 pt-10 flex flex-col justify-between p-4 text-black">
        
                <div className={`tracking-[2px] leading-tight ${titleStyle}`}>
                  {Array.isArray(title)
                    ? title.map((line, i) => (
                        <div key={i} className="leading-tight">
                          {line}
                        </div>
                      ))
                    : <div>{title}</div>}
                  <div className={`mb-2 leading-snug ${subtitleStyle}`}>
                    {subtitle.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>

               
                <div className="mt-auto">
                  {buttonStyle && (
                    <button className={`px-4 py-1 transition ${buttonStyle}`}>
                      Shop Now
                    </button>
                  )}
                </div>
              </div>
            </figure>
          </li>
        )
      )}
    </ul>
  </div>
</div>

  );
}
