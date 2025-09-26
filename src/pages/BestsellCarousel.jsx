import React, { useRef, useState, useEffect } from "react";
import BestsellCard from "../components/BestsellCard";

const BestsellCarousel = ({ products = [] }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [activeFilter, setActiveFilter] = useState("Top 30");

  const filters = [
    "Top 30",
    "Televisions",
    "PC Gaming",
    "Computers",
    "Cameras",
    "Gadgets",
    "Smart Home",
    "Sport Equipments",
  ];


  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCardsPerPage(4);
      else if (width >= 1024) setCardsPerPage(3);
      else if (width >= 640) setCardsPerPage(2);
      else setCardsPerPage(1);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

 
  const filteredProducts =
    activeFilter === "Top 30"
      ? products
      : products.filter(
          (product) =>
            product.category &&
            product.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const totalSlides = Math.ceil(filteredProducts.length / cardsPerPage);

  const scrollToIndex = (index) => {
    if (index < 0 || index >= totalSlides) return;
    const container = containerRef.current;
    if (container && container.firstChild) {
      const cardWidth = container.firstChild.offsetWidth;
      const scrollLeft = index * cardWidth * cardsPerPage;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const cardWidth = container.firstChild?.offsetWidth || 0;
      const newIndex = Math.round(container.scrollLeft / (cardWidth * cardsPerPage));
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [cardsPerPage, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        if (currentIndex < totalSlides - 1) scrollToIndex(currentIndex + 1);
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) scrollToIndex(currentIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, totalSlides]);

  
  useEffect(() => {
    setCurrentIndex(0);
    if (containerRef.current) containerRef.current.scrollLeft = 0;
  }, [activeFilter, cardsPerPage]);

  return (
    <div className="relative max-w-5xl rounded-2xl mt-4 bg-[#EBEEF6] mx-auto px-4">
     
      <div className="flex items-center justify-between mb-8 pt-8">
        <h2 className="text-2xl font-bold">Popular Brands</h2>
        <button className="text-black font-medium text-[10px] hover:underline">
          VIEW ALL &gt;
        </button>
      </div>

    
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-[#4B3EC4] text-white"
                : "bg-white text-black hover:bg-[#4B3EC4]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

     
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth gap-4 px-2 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        aria-label="Best selling products carousel"
        role="region"
      >
        {filteredProducts.length === 0 && (
          <p className="p-4 text-center w-full text-gray-600">
            No products found in this category.
          </p>
        )}

        {filteredProducts.map((product, index) => (
          <div
            key={product.title + index}
            className="flex-shrink-0"
            style={{
              width: `calc((100% - ${(cardsPerPage - 1) * 16}px) / ${cardsPerPage})`,
              scrollSnapAlign: "start",
            }}
          >
            <BestsellCard {...product} index={index} />
          </div>
        ))}
      </div>

      
      <div className="flex items-center bg-[#E5E6F3] gap-1 mt-4 max-w-[150px] rounded-xl mx-auto p-1">
        <button
          onClick={() => scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
          className={`text-sm px-3 py-1 rounded border shadow-sm transition ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed bg-gray-200 border-gray-300 rounded-4xl"
              : "bg-white border-gray-400 hover:bg-gray-100 rounded-4xl"
          }`}
        >
          Prev
        </button>

        <div
          className="flex-grow flex justify-center gap-2"
          role="tablist"
          aria-label="Carousel Pagination"
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === currentIndex}
              role="tab"
              className={`h-1 w-1 rounded-full focus:outline-none ${
                i === currentIndex ? "bg-[#4B3EC4]" : "bg-gray-300"
              }`}
              tabIndex={i === currentIndex ? 0 : -1}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(currentIndex + 1)}
          disabled={currentIndex >= totalSlides - 1}
          aria-label="Next slide"
          className={`text-sm px-3 py-1 rounded border shadow-sm transition ${
            currentIndex >= totalSlides - 1
              ? "opacity-50 cursor-not-allowed bg-gray-200 border-gray-300 rounded-4xl"
              : "bg-white border-gray-400 hover:bg-gray-100 rounded-4xl"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BestsellCarousel;
