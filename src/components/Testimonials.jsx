import React, { useRef, useState, useEffect } from 'react';
import brand_1 from '../assets/e739460cd108735741d1d9055086c2f0a6405e00.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const testimonialsData = [
  {
    id: 1,
    stars: 5,
    title: 'Amazing Product Quality',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur, odio nec tempor convallis, nunc urna efficitur velit, at condimentum erat erat ut mauris.',
    name: 'John Doe',
    verified: true,
    location: '1234 Elm Street, Springfield, USA',
    img: brand_1,
  },
  {
    id: 2,
    stars: 4,
    title: 'Excellent Customer Service',
    review:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    name: 'Jane Smith',
    verified: true,
    location: '5678 Maple Ave, Metropolis, USA',
    img: brand_1,
  },
  {
    id: 3,
    stars: 5,
    title: 'Highly Recommend',
    review:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Alice Johnson',
    verified: false,
    location: '91011 Oak Street, Gotham, USA',
    img: brand_1,
  },
  
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  
  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setCanScrollPrev(scrollTop > 0);
    setCanScrollNext(scrollTop + clientHeight < scrollHeight);
  };


  const scrollByHeight = (direction) => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.clientHeight;
    containerRef.current.scrollBy({
      top: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

 
  useEffect(() => {
    const refCurrent = containerRef.current;
    if (!refCurrent) return;

    refCurrent.addEventListener('scroll', checkScroll);
 
    checkScroll();

    return () => {
      refCurrent.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="relative   bg-[#EBEEF6] rounded-lg p-6 flex flex-col gap-2">
      
        <div className="flex justify-between items-center -mt-3 ">
          <h3 className="text-xl font-semibold text-black">
            Best Selling Speakers
          </h3>
          <div className="flex space-x-3">
            <button
              onClick={() => scrollByHeight(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous"
              className={`w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#4B3EC4] font-bold transition ${
                !canScrollPrev ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#dcdcff]'
              }`}
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              onClick={() => scrollByHeight(1)}
              disabled={!canScrollNext}
              aria-label="Next"
              className={`w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#4B3EC4] font-bold transition ${
                !canScrollNext ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#dcdcff]'
              }`}
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>

      
        <div
          ref={containerRef}
          className="max-h-[140px] overflow-x-auto space-y-6 pr-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-lg   px-3 py-3 shadow-md flex flex-col"
            >
            
              <div className="flex items-center space-x-4 ">
                <div className="flex space-x-1 text-green-500">
                  {Array(t.stars)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.371 2.449c-.784.57-1.838-.196-1.54-1.118l1.287-3.962a1 1 0 00-.364-1.118L3.642 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.962z" />
                      </svg>
                    ))}
                </div>
                <h4 className="text-lg font-semibold text-black">{t.title}</h4>
              </div>

            
              <p className="text-gray-700 line-clamp-4 mb-6">{t.review}</p>

             
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={t.img}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 block w-1 h-1 bg-green-500 rounded-full ring-2 ring-white"></span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-black text-md">
                    {t.name}{' '}
                    {t.verified && (
                      <span className="text-green-600 text-xs font-normal">
                        Verified Buyer
                      </span>
                    )}
                  </p>
                  <p className="text-gray-500 text-[10px]">{t.location}</p>
                  
                </div>
                 <div className="flex justify-end mt-4">
                <a href="#" className="text-blue-600 hover:underline text-[10px]">
                 Marshall Standmore 
                </a>
              </div>
              </div>

             
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
